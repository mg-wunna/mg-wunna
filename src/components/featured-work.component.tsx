import Link from 'next/link'

import { ProjectCard } from '@/components/project-card.component'
import {
  Reveal,
  RevealItem,
  RevealStagger,
} from '@/components/reveal.component'
import { getFeaturedProjects } from '@/utilities/projects'

export function FeaturedWork() {
  const featured = getFeaturedProjects(3)

  return (
    <section className="bg-background py-xl">
      <div className="mx-auto max-w-8xl px-margin">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="max-w-2xl">
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-2 font-display text-headline-md font-medium text-on-surface">
                Recent projects designed to drive results.
              </h2>
            </div>
            <Link href="/work" className="btn-tertiary">
              View all work →
            </Link>
          </div>
        </Reveal>

        {featured.length === 0 ? (
          <p className="mt-lg text-body-md text-secondary">
            New projects are on the way.
          </p>
        ) : (
          <RevealStagger className="mt-lg grid grid-cols-1 gap-x-gutter gap-y-lg sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <RevealItem key={project.slug}>
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </RevealStagger>
        )}
      </div>
    </section>
  )
}
