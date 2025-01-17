'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Project } from '../../../types/project-type';
import Card from '../../commons/card';

// ☐ create projects component
const HomePageProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/apis/projects/popular');
      const data = await response.json();
      setProjects(data.data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto mb-32 px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="relative mb-4 inline-block text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Featured Projects
          <div className="absolute -right-6 -top-6 h-12 w-12 rotate-12 rounded-lg bg-orange-500/50 blur-xl" />
          <div className="absolute -bottom-6 -left-6 h-12 w-12 -rotate-12 rounded-lg bg-orange-500/50 blur-xl" />
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Explore a collection of my recent work showcasing web development and
          design expertise
        </p>
        <div className="mx-auto mt-4 h-1 w-20 rounded bg-gradient-to-r from-orange-500/5 via-orange-500 to-orange-500/5"></div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project._id}
            title={project.title}
            description={project.description}
            categories={project.categories}
            imageUrl={project.image}
            href={`/projects/${project.slug}`}
            type="project"
            date={new Date(project.publishedAt)}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-base"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default HomePageProjectsSection;
