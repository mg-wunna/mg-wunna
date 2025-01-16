import { Category } from '@/types/category-type';
import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const categories: Category[] = Array.from({ length: 10 }, () => ({
      _id: faker.string.uuid(),
      name: faker.lorem.word(),
      type: 'blog',
      createdAt: faker.date.recent().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
    }));

    return NextResponse.json({
      status: '200',
      message: 'Categories fetched successfully.',
      data: categories,
    });
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({
      status: '500',
      message: 'Categories fetched failed.',
    });
  }
}
