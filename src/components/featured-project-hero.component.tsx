import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { type Project } from '@/types/project.type'
import { getCategoryLabel } from '@/utilities/projects'

interface FeaturedProjectHeroProps {
  project: Project
  /** Add an eyebrow such as "Featured · Business website". Defaults to project category. */
  eyebrow?: string
  /** Whether the hero image should be priority-loaded. Use for above-the-fold heroes. */
  priority?: boolean
}

/**
 * Content-only cinematic hero for the lead featured project.
 * Parent is responsible for the surrounding <section> + container.
 */
export function FeaturedProjectHero({
  project,
  eyebrow,
  priority = false,
}: FeaturedProjectHeroProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="focus-ring group block focus-visible:rounded-md"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted-surface transition-[transform,box-shadow,border-color] duration-300 ease-out group-hover:-translate-y-1 group-hover:border-on-surface group-hover:shadow-card-hover">
        <Image
          src={project.heroImage ?? project.coverImage}
          alt={`${project.name} cover`}
          fill
          priority={priority}
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
            priority={priority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="hidden object-cover dark:block"
          />
        ) : null}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-4 flex h-11 w-11 -translate-y-1 items-center justify-center rounded-full bg-background/95 text-on-surface opacity-0 shadow-soft ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} />
        </span>
      </div>
      <div className="mt-md">
        <p className="eyebrow">
          {eyebrow ?? `Featured · ${getCategoryLabel(project.category)}`}
        </p>
        <h3 className="mt-2 font-display text-headline-md font-medium text-on-surface">
          {project.name}
        </h3>
        <p className="mt-md max-w-2xl text-body-lg text-secondary">
          {project.oneLineImpact}
        </p>
        <span className="btn-tertiary mt-md inline-flex">View project →</span>
      </div>
    </Link>
  )
}
