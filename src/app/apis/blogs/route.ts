import { Blog } from '@/types/blog-type';
import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || 'all';

    const blogs: Blog[] = Array.from({ length: 10 }, () => ({
      _id: faker.string.uuid(),
      slug: faker.lorem.slug(),
      title: faker.lorem.sentence(),
      image: '/images/blogs/blog-1.png',
      description: faker.lorem.paragraph(),
      category: category === 'all' ? faker.lorem.word() : category,
      content: faker.lorem.paragraphs(),
      createdAt: faker.date.recent().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
    }));

    return NextResponse.json({
      status: '200',
      message: 'Blogs fetched successfully.',
      meta: {
        isMoreBlogsExist: true,
      },
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
