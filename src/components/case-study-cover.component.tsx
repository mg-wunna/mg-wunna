import { ArrowLeft, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { type Project } from '@/types/project.type'
import { getCategoryLabel } from '@/utilities/projects'

interface CaseStudyCoverProps {
  project: Project
}

export function CaseStudyCover({ project }: CaseStudyCoverProps) {
  return (
    <header className="preload-anim preload-delay-200 bg-background pt-lg">
      <div className="mx-auto max-w-editorial px-margin text-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-caption text-secondary transition-colors hover:text-on-surface"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          All work
        </Link>

        <p className="eyebrow mt-md">
          {getCategoryLabel(project.category)} · {project.year}
          {project.client ? ` · ${project.client}` : ''}
        </p>
        <h1 className="mt-md text-balance font-display text-headline-md font-medium text-on-surface sm:text-headline-lg">
          {project.name}
        </h1>
        <p className="mx-auto mt-md max-w-prose text-body-lg text-secondary">
          {project.tagline}
        </p>
        {project.liveUrl ? (
          <div className="mt-md">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-tertiary"
            >
              Visit live site
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        ) : null}
      </div>

      <div className="mt-lg px-margin">
        <div className="mx-auto max-w-8xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted-surface">
            <Image
              src={project.heroImage ?? project.coverImage}
              alt={`${project.name} cover`}
              fill
              priority
              sizes="(min-width: 1440px) 1408px, 100vw"
              className={
                project.coverImageDark
                  ? 'object-cover dark:hidden'
                  : 'object-cover'
              }
            />
            {project.coverImageDark ? (
              <Image
                src={project.coverImageDark}
                alt=""
                fill
                priority
                sizes="(min-width: 1440px) 1408px, 100vw"
                className="hidden object-cover dark:block"
              />
            ) : null}
          </div>
        </div>
      </div>
    </header>
  )
}
