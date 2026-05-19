import { ArrowUpRight } from 'lucide-react'
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
      className="focus-ring group block focus-visible:rounded-md"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted-surface transition-[transform,box-shadow,border-color] duration-300 ease-out group-hover:-translate-y-1 group-hover:border-on-surface group-hover:shadow-[0_24px_48px_-20px_rgb(0_0_0_/_0.2)]">
        <Image
          src={project.coverImage}
          alt={`${project.name} cover`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={
            project.coverImageDark ? 'object-cover dark:hidden' : 'object-cover'
          }
        />
        {project.coverImageDark ? (
          <Image
            src={project.coverImageDark}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="hidden object-cover dark:block"
          />
        ) : null}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-3 flex h-10 w-10 -translate-y-1 items-center justify-center rounded-full bg-background/95 text-on-surface opacity-0 shadow-soft ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </span>
      </div>
      <div className="mt-md flex items-baseline justify-between gap-3">
        <h3 className="text-subheadline font-medium text-on-surface">
          {project.name}
        </h3>
        <span className="text-caption text-secondary">
          {getCategoryLabel(project.category)}
        </span>
      </div>
      <p className="mt-2 text-body-md text-secondary">
        {project.oneLineImpact}
      </p>
    </Link>
  )
}
