import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import ContactModel from '../../../models/contact-model';
import { contactValidator } from '../../../validators/contact-validator';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const result = contactValidator(body);
    if (!result.success) {
      return NextResponse.json(
        {
          status: 400,
          message: 'Validation failed',
          errors: result.errors,
        },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI as string);

    // Create new contact
    const contact = new ContactModel({
      name: body.name,
      email: body.email,
      message: body.message,
    });

    // Save to database
    await contact.save();

    return NextResponse.json(
      {
        status: 201,
        message: 'Contact created successfully',
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating contact:', error);
    return NextResponse.json(
      {
        status: 500,
        message: 'Failed to create contact',
      },
      { status: 500 }
    );
  } finally {
    await mongoose.disconnect();
  }
}
