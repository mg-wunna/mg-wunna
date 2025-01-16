'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Project } from '../../../types/project-type';
import Markdown from '../../commons/markdown/markdown';
import CommentsSection from '../../sections/comments-section/comments-section';
import ProjectDetailSkeletonSection from './project-detail-page--skeleton-section';

const ProjectDetailPageDetailSection = () => {
  const [project, setProject] = useState<Project | null>(null);
  const params = useParams();

  const slug = useMemo(() => {
    return typeof params?.slug === 'string' ? params.slug : '';
  }, [params?.slug]);

  useEffect(() => {
    if (!slug || project) return;

    fetch(`/apis/projects/${slug}`)
      .then((response) => response.json())
      .then(async (data) => {
        const contentResponse = await fetch(
          `/projects/${data.data.slug}/content.md`
        );
        const content = (await contentResponse.text()).replaceAll(
          '(../../projects/',
          '(/projects/'
        );
        setProject({ ...data.data, content });
      })
      .catch((error) => console.error('Error fetching project:', error));
  }, [project, slug]);

  if (!project) {
    return <ProjectDetailSkeletonSection />;
  }

  return (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link
            href="/"
            className="hover:text-gray-900"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/projects"
            className="hover:text-gray-900"
          >
            Projects
          </Link>
          <span>/</span>
          <span className="capitalize text-gray-900">
            {project.slug.split('-').join(' ')}
          </span>
        </nav>

        {/* Title Section */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            {project.title}
          </h1>
          {project.categories.map((category) => (
            <div
              key={category}
              className="mr-1 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm capitalize text-blue-800"
            >
              {category}
            </div>
          ))}
          <div className="mt-4 text-sm text-gray-500">
            {new Date(project.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Links */}
        {project.links.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-4">
            {project.links?.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className="group relative inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                <span>{link.title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            ))}
          </div>
        )}

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg leading-relaxed text-gray-600">
            {project.description}
          </p>
        </div>

        {/* Tools and Technology */}
        <div className="prose prose-lg max-w-none">
          <Markdown content={project.content} />
        </div>

        <CommentsSection
          type="projects"
          slug={project.slug}
        />
      </div>
    </main>
  );
};

export default ProjectDetailPageDetailSection;
