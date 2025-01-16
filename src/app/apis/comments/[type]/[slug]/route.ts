import CommentModel from '@/models/comments-model';
import { Comment } from '@/types/comment-type';
import { commentValidator } from '@/validators/comment-validator';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const page = request?.nextUrl?.searchParams.get('page') || 1;
    const limit = request?.nextUrl?.searchParams.get('limit') || 10;
    const [type, slug] = request?.nextUrl?.pathname.split('/').slice(-2) || [];

    await mongoose.connect(process.env.MONGODB_URI as string);

    const totalComments = await CommentModel.countDocuments({ type, slug });
    const comments: Comment[] = await CommentModel.find({ type, slug })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .sort({ date: -1 });

    return NextResponse.json(
      {
        status: 200,
        message: 'Comments fetched successfully.',
        meta: {
          total: totalComments,
          page: Number(page),
          limit: Number(limit),
        },
        data: comments,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      {
        status: 500,
        message: 'Comments fetch failed.',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const [type, slug] = request?.nextUrl?.pathname.split('/').slice(-2) || [];
    const body = await request.json();

    // Validate request body
    const result = commentValidator(body);
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
    const comment = new CommentModel({
      type,
      slug,
      name: body.name,
      email: body.email,
      rating: body.rating,
      comment: body.comment,
    });

    // Save to database
    await comment.save();

    return NextResponse.json(
      {
        status: 201,
        message: 'Comment created successfully',
        data: comment,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      {
        status: 500,
        message: 'Failed to create comment',
      },
      { status: 500 }
    );
  }
}
