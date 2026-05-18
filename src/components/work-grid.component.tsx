'use client'

import { useMemo, useState } from 'react'
import clsx from 'clsx'

import { ProjectCard } from '@/components/project-card.component'
import {
  PROJECT_CATEGORY_LABELS,
  type Project,
  type ProjectCategory,
} from '@/types/project.type'

type Filter = ProjectCategory | 'all'

const FILTER_OPTIONS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  ...(
    Object.entries(PROJECT_CATEGORY_LABELS) as [ProjectCategory, string][]
  ).map(([value, label]) => ({ value: value as Filter, label })),
]

interface WorkGridProps {
  projects: Project[]
}

export function WorkGrid({ projects }: WorkGridProps) {
  const [active, setActive] = useState<Filter>('all')

  const filtered = useMemo(() => {
    if (active === 'all') return projects
    return projects.filter((project) => project.category === active)
  }, [active, projects])

  return (
    <div>
      <div
        role="toolbar"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {FILTER_OPTIONS.map((option) => {
          const isActive = option.value === active
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(option.value)}
              className={clsx(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition duration-150 ease-enter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950',
                isActive
                  ? 'border-brand bg-brand text-brand-fg'
                  : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100',
              )}
            >
              {option.label}
            </button>
          )
        })}
      </div>
      {filtered.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-base text-zinc-500 dark:text-zinc-400">
          No projects in this category yet — new case studies are on the way.
        </p>
      )}
    </div>
  )
}
