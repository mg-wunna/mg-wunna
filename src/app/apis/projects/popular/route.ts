import { Project } from '@/types/project-type';
import { NextResponse } from 'next/server';
import ProjectModel from '../../../../models/project-model';
import database from '../../../../utilities/database';

export async function GET() {
  try {
    await database.connect();

    const projects: Project[] = await ProjectModel.find({})
      .sort({ views: -1 })
      .limit(4);

    return NextResponse.json({
      status: '200',
      message: 'Projects fetched successfully.',
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
