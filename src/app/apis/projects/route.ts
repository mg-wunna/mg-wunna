import { Project } from '@/types/project-type';
import { NextResponse } from 'next/server';
import ProjectModel from '../../../models/project-model';
import database from '../../../utilities/database';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category')?.toLowerCase() || 'all';

    await database.connect();

    const projects: Project[] = await ProjectModel.find(
      category === 'all' ? {} : { categories: { $in: [category] } }
    )
      .sort({ views: -1, createdAt: -1 })
      .limit(10);

    return NextResponse.json({
      status: '200',
      message: 'Projects fetched successfully.',
      meta: { isMoreProjectsExist: false },
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
