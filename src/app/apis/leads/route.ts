import mongoose from 'mongoose'
import { NextResponse } from 'next/server'

import LeadModel from '@/models/lead-model'
import { leadSchema } from '@/utilities/lead-schema'
import validator from '@/utilities/validator'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = validator(leadSchema, body)
  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Validation failed', errors: parsed.errors },
      { status: 400 },
    )
  }

  const { _hp, ...lead } = parsed.data
  if (_hp) {
    // Silently accept honeypot hits so bots get no rejection signal.
    return NextResponse.json({ message: 'Received' }, { status: 201 })
  }

  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not configured')
    }
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI)
    }
    await LeadModel.create(lead)
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
