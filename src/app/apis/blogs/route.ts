import { NextResponse } from 'next/server';
import BlogModel from '../../../models/blog-model';
import database from '../../../utilities/database';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category')?.toLowerCase() || 'all';
    const search = searchParams.get('search') || '';

    await database.connect();

    const categoryMatch =
      category === 'all' ? {} : { categories: { $in: [category] } };

    // First query: Text search
    const textResults = search
      ? await BlogModel.aggregate([
          {
            $match: {
              ...categoryMatch,
              $text: { $search: search },
            },
          },
          {
            $addFields: {
              score: { $meta: 'textScore' },
            },
          },
          {
            $sort: { score: { $meta: 'textScore' } },
          },
        ])
      : [];

    // Second query: Regex search
    const regexResults = search
      ? await BlogModel.aggregate([
          {
            $match: {
              ...categoryMatch,
              $or: [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { keywords: { $regex: search, $options: 'i' } },
              ],
            },
          },
          {
            $sort: { publishedAt: -1 },
          },
        ])
      : await BlogModel.aggregate([
          {
            $match: categoryMatch,
          },
          {
            $sort: { publishedAt: -1 },
          },
        ]);

    // Combine and remove duplicates using Set
    const combinedResults = [...textResults, ...regexResults].reduce(
      (unique, blog) => {
        const exists = unique.find(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (item: any) => item._id.toString() === blog._id.toString()
        );
        return exists ? unique : [...unique, blog];
      },
      []
    );
    const blogs = combinedResults.slice(0, 10);

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
