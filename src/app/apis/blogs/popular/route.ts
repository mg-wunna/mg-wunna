import { Blog } from '@/types/blog-type';
import { NextResponse } from 'next/server';
import BlogModel from '../../../../models/blog-model';
import database from '../../../../utilities/database';

export async function GET() {
  try {
    await database.connect();

    const blogs: Blog[] = await BlogModel.find({}).sort({ views: -1 }).limit(4);

    return NextResponse.json({
      status: '200',
      message: 'Blogs fetched successfully.',
      data: blogs,
    });
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({
      status: '500',
      message: 'Blogs fetched failed.',
    });
  }
}
