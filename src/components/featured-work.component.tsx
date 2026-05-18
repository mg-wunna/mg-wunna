import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Container } from '@/components/container.component'
import { ProjectCard } from '@/components/project-card.component'
import { SectionHeading } from '@/components/section-heading.component'
import { getFeaturedProjects } from '@/utilities/projects'

export function FeaturedWork() {
  const projects = getFeaturedProjects(4)

  return (
    <Container className="mt-24 sm:mt-32">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Selected Work"
          title="Recent projects designed to drive results."
          description="A few of the most recent projects — each built to help a business grow online."
        />
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-brand dark:text-zinc-300 dark:hover:text-brand"
        >
          View all work
          <ArrowRight
            className="h-4 w-4 transition group-hover:translate-x-0.5 motion-reduce:transform-none"
            aria-hidden="true"
          />
        </Link>
      </div>
      {projects.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-base text-zinc-500 dark:text-zinc-400">
          New case studies are on the way.
        </p>
      )}
    </Container>
  )
}
