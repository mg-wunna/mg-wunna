import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';
import { Project } from '../../../types/project-type';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || 'all';

    const projects: Project[] = Array.from({ length: 10 }, () => ({
      _id: faker.string.uuid(),
      slug: faker.lorem.slug(),
      title: faker.lorem.sentence(),
      image: '/images/blogs/blog-1.png',
      description: faker.lorem.paragraph(),
      categories: category === 'all' ? [faker.lorem.word()] : [category],
      content: faker.lorem.paragraphs(),
      createdAt: faker.date.recent().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
      links: [],
    }));

    return NextResponse.json({
      status: '200',
      message: 'Projects fetched successfully.',
      meta: {
        isMoreProjectsExist: true,
      },
      data: projects,
    });
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({
      status: '500',
      message: 'Projects fetched failed.',
    });
  }
}
