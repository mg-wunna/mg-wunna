import { Blog } from '@/types/blog-type';
import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const blogs: Blog[] = Array.from({ length: 4 }, () => ({
      _id: faker.string.uuid(),
      slug: faker.lorem.slug(),
      title: faker.lorem.sentence(),
      image: '/images/blogs/blog-1.png',
      description: faker.lorem.paragraph(),
      category: faker.lorem.word(),
      content: faker.lorem.paragraphs(),
      createdAt: faker.date.recent().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
    }));

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
