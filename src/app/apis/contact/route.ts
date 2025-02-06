import mongoose from 'mongoose'
import { NextResponse } from 'next/server'
import ContactModel from '../../../models/contact-model'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI as string)

    // Create new contact
    await ContactModel.findOneAndUpdate(
      { email: body.email },
      { email: body.email },
      { upsert: true },
    )

    return NextResponse.json(
      {
        message: 'Contact created successfully',
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error creating contact:', error)
    return NextResponse.json(
      {
        message: 'Failed to create contact',
      },
      { status: 500 },
    )
  }
}
