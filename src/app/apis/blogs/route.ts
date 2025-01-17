import { Blog } from '@/types/blog-type';
import { NextResponse } from 'next/server';
import BlogModel from '../../../models/blog-model';
import database from '../../../utilities/database';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category')?.toLowerCase() || 'all';

    await database.connect();

    const blogs: Blog[] = await BlogModel.find(
      category === 'all' ? {} : { categories: { $in: [category] } }
    )
      .sort({ views: -1, createdAt: -1 })
      .limit(10);

    return NextResponse.json({
      status: '200',
      message: 'Blogs fetched successfully.',
      meta: { isMoreBlogsExist: false },
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
