import mongoose from 'mongoose'
import { NextResponse } from 'next/server'

import LeadModel from '@/models/lead-model'
import { leadSchema } from '@/utilities/lead-schema'
import { getClientIp, rateLimit } from '@/utilities/rate-limit'
import { formatLeadMessage, sendTelegramMessage } from '@/utilities/telegram'
import validator from '@/utilities/validator'

const RATE_LIMIT = { windowMs: 60 * 60 * 1000, max: 5 }

export async function POST(request: Request) {
  const ip = getClientIp(request)
  const limit = rateLimit(`leads:${ip}`, RATE_LIMIT)
  if (!limit.allowed) {
    return NextResponse.json(
      { message: 'Too many submissions. Please try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': String(limit.retryAfterSeconds) },
      },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 })
  }

  // Check honeypot BEFORE validation. Bots typically fill _hp but skip required
  // fields — running Zod first would 400 them and signal rejection.
  if (
    body &&
    typeof body === 'object' &&
    typeof (body as { _hp?: unknown })._hp === 'string' &&
    (body as { _hp: string })._hp.length > 0
  ) {
    return NextResponse.json({ message: 'Received' }, { status: 201 })
  }

  const parsed = validator(leadSchema, body)
  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Validation failed', errors: parsed.errors },
      { status: 400 },
    )
  }

  const { _hp: _unused, ...lead } = parsed.data
  void _unused

  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not configured')
    }
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI)
    }
    await LeadModel.create(lead)

    // Fire-and-log Telegram notification — never block the response on it.
    try {
      await sendTelegramMessage({ text: formatLeadMessage(lead) })
    } catch (notifyError) {
      console.error('Telegram notification failed:', notifyError)
    }

    return NextResponse.json(
      { message: 'Lead received successfully' },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { message: 'Something went wrong on our end' },
      { status: 500 },
    )
  }
}
