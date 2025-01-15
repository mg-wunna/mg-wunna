'use client';

import { faker } from '@faker-js/faker';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import Card from '../card';

type CategoryFilterProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`relative overflow-hidden rounded-lg px-6 py-2 text-sm font-medium capitalize transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/20 ${
            selectedCategory === category
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25'
              : 'bg-white text-gray-600 shadow-md hover:shadow-lg hover:shadow-orange-500/10'
          }`}
          aria-label={`Filter by ${category} projects`}
        >
          <span className="relative z-10">{category}</span>
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-200/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </button>
      ))}
    </div>
  );
};

// ☐ create projects component
const Projects = () => {
  const projects = useMemo(() => {
    return Array.from({ length: 10 }).map(() => ({
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      category: faker.lorem.word(),
      imageUrl: '/images/projects/project-1.png',
      href: '/projects/1',
      type: 'project',
      date: faker.date.recent(),
    }));
  }, []);

  const categories = useMemo(() => {
    return ['All', ...new Set(projects.map((project) => project.category))];
  }, [projects]);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <div className="container mx-auto mb-32 mt-20 px-4 sm:px-6 lg:px-8">
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

      <div className="mb-8 flex flex-col gap-6">
        {/* Search Box */}
        <div className="relative mx-auto w-full max-w-2xl rounded-2xl border border-orange-500/50">
          <div className="group relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full rounded-2xl border-none bg-gradient-to-br from-white to-orange-50 px-6 py-4 text-base shadow-lg shadow-orange-500/5 transition duration-300 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-500/20 group-hover:shadow-xl group-hover:shadow-orange-500/10"
              aria-label="Search projects"
            />
            <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/25 transition-transform duration-300 group-hover:scale-95">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>

      <motion.div
        layout
        initial={{ opacity: 0, rotateY: 0 }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 90 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 12,
        }}
        style={{ transformPerspective: '1000px' }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: (i: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.1,
                  },
                }),
              }}
              initial="hidden"
              animate="show"
              exit="hidden"
              custom={index}
            >
              <Card
                title={project.title}
                description={project.description}
                category={project.category}
                imageUrl={project.imageUrl}
                href={project.href}
                type="project"
                date={project.date}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
