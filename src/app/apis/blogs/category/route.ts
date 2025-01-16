import { Category } from '@/types/category-type';
import { NextResponse } from 'next/server';
import BlogModel from '../../../../models/blog-model';
import database from '../../../../utilities/database';

export async function GET() {
  try {
    await database.connect();

    const categories: Category[] = await BlogModel.distinct('categories');

    return NextResponse.json({
      status: '200',
      message: 'Categories fetched successfully.',
      data: categories.map((category) => ({ name: category, type: 'blog' })),
    });
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({
      status: '500',
      message: 'Categories fetched failed.',
    });
  }
}
