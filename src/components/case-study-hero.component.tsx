import { ArrowLeft, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { type Project } from '@/types/project.type'
import { getCategoryLabel } from '@/utilities/projects'

interface CaseStudyHeroProps {
  project: Project
}

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <header>
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition hover:text-brand dark:text-zinc-400 dark:hover:text-brand"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        All work
      </Link>
      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">
        <span>{getCategoryLabel(project.category)}</span>
        <span aria-hidden="true">·</span>
        <span>{project.year}</span>
        {project.client ? (
          <>
            <span aria-hidden="true">·</span>
            <span>{project.client}</span>
          </>
        ) : null}
      </div>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
        {project.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl dark:text-zinc-400">
        {project.tagline}
      </p>
      {project.liveUrl ? (
        <div className="mt-8">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand transition hover:text-brand-hover"
          >
            Visit live site
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      ) : null}
      <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
        <Image
          src={project.coverImage}
          alt={`${project.name} cover`}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          priority
          className="object-cover"
        />
      </div>
    </header>
  )
}
