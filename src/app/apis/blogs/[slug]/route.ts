import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import BlogModel from '../../../../models/blog-model';
import { Blog } from '../../../../types/blog-type';
import database from '../../../../utilities/database';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const slug = request?.nextUrl?.pathname.split('/').pop() || '';

    await database.connect();

    // Generate a single blog post with the given slug
    const blog = (await BlogModel.findOne({ slug }).lean()) as Blog | null;

    if (!blog) {
      return NextResponse.json(
        {
          status: '404',
          message: 'Blog not found.',
        },
        { status: 404 }
      );
    }

    blog.content = fs
      .readFileSync(`public/blogs/${blog.slug}/content.md`, 'utf-8')
      .replaceAll('(../../blogs/', '(/blogs/');

    return NextResponse.json({
      status: '200',
      message: 'Blog fetched successfully.',
      data: blog,
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      {
        status: '500',
        message: 'Blog fetch failed.',
      },
      { status: 500 }
    );
  }
}
