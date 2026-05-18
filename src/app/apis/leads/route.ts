import mongoose from 'mongoose'
import { NextResponse } from 'next/server'
import { z } from 'zod'

import LeadModel from '@/models/lead-model'
import validator from '@/utilities/validator'

const leadSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().toLowerCase().email('Enter a valid email'),
  company: z.string().trim().max(120).optional().or(z.literal('')),
  projectType: z.enum([
    'business-website',
    'website-redesign',
    'saas-mvp',
    'dashboard',
    'other',
  ]),
  budget: z.enum(['<500', '500-2k', '2k-5k', '5k+']),
  description: z
    .string()
    .trim()
    .min(10, 'Please share a bit more about the project')
    .max(2000),
  goals: z
    .array(
      z.enum([
        'more-customers',
        'brand-image',
        'automation',
        'launch-startup',
        'other',
      ]),
    )
    .default([]),
  timeline: z.enum(['asap', '1-2-weeks', '1-month', 'flexible']),
  // Honeypot — bots will fill this; humans never see it.
  _hp: z.string().max(0).optional(),
})

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

  // Drop honeypot before persisting.
  const { _hp, ...lead } = parsed.data
  if (_hp) {
    // Silently accept to avoid signaling rejection to bots.
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
