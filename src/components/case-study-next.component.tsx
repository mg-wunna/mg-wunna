import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { type Project } from '@/types/project.type'
import { getCategoryLabel } from '@/utilities/projects'

interface CaseStudyNextProps {
  project: Project
}

export function CaseStudyNext({ project }: CaseStudyNextProps) {
  return (
    <section className="border-t border-border bg-muted-surface py-xl">
      <div className="mx-auto max-w-8xl px-margin">
        <Link
          href={`/work/${project.slug}`}
          className="focus-ring group block focus-visible:rounded-sm"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="eyebrow">Next project</p>
            <span className="btn-tertiary">
              Continue
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </span>
          </div>

          <div className="mt-md grid grid-cols-1 items-end gap-md md:grid-cols-2 lg:gap-gutter">
            <div className="order-2 md:order-1">
              <p className="eyebrow">{getCategoryLabel(project.category)}</p>
              <h3 className="mt-2 font-display text-headline-md font-medium text-on-surface">
                {project.name}
              </h3>
              <p className="mt-md max-w-md text-body-md text-secondary">
                {project.oneLineImpact}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted-surface">
                <Image
                  src={project.coverImage}
                  alt={`${project.name} cover`}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
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
                    sizes="(min-width: 1024px) 512px, 100vw"
                    className="hidden object-cover dark:block"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
