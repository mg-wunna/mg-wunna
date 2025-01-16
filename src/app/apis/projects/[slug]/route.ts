import { NextRequest, NextResponse } from 'next/server';
import ProjectModel from '../../../../models/project-model';
import { Project } from '../../../../types/project-type';
import database from '../../../../utilities/database';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const slug = request?.nextUrl?.pathname.split('/').pop() || '';

    await database.connect();

    // Generate a single project with the given slug
    const project = (await ProjectModel.findOne({
      slug,
    }).lean()) as Project | null;

    if (!project) {
      return NextResponse.json(
        {
          status: '404',
          message: 'Project not found.',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: '200',
      message: 'Project fetched successfully.',
      data: project,
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      {
        status: '500',
        message: 'Project fetch failed.',
      },
      { status: 500 }
    );
  }
}
