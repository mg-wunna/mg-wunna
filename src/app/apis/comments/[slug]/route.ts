import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';
import { Comment } from '../../../../types/comment-type';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id: parentId } = params;

    const comments: Comment[] = Array(5)
      .fill('')
      .map(() => ({
        _id: faker.string.uuid(),
        parentId,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        rating: faker.number.int({ min: 1, max: 5 }),
        comment: faker.lorem.paragraph(),
        date: faker.date.recent(),
      }));

    return NextResponse.json({
      status: '200',
      message: 'Comments fetched successfully.',
      meta: {
        total: 20,
        page: 1,
        limit: 10,
      },
      data: comments,
    });
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({
      status: '500',
      message: 'Comments fetch failed.',
    });
  }
}
