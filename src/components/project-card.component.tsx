import Image from 'next/image'
import Link from 'next/link'

import { type Project } from '@/types/project.type'
import { getCategoryLabel } from '@/utilities/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block focus-visible:outline-none"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200 transition duration-320 ease-enter group-hover:shadow-card-hover group-focus-visible:ring-2 group-focus-visible:ring-brand dark:bg-zinc-900 dark:ring-zinc-800">
        <Image
          src={project.coverImage}
          alt={`${project.name} cover`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition duration-320 ease-enter group-hover:scale-[1.02] motion-reduce:transform-none"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-brand dark:text-zinc-50 dark:group-hover:text-brand">
          {project.name}
        </h3>
        <span className="text-xs uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-500">
          {getCategoryLabel(project.category)}
        </span>
      </div>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        {project.oneLineImpact}
      </p>
    </Link>
  )
}
