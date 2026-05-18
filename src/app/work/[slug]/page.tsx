import { Check } from 'lucide-react'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CaseStudyHero } from '@/components/case-study-hero.component'
import { CaseStudySection } from '@/components/case-study-section.component'
import { Container } from '@/components/container.component'
import { CtaSection } from '@/components/cta-section.component'
import { UiShowcase } from '@/components/ui-showcase.component'
import { getAllProjects, getProjectBySlug } from '@/utilities/projects'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Not found' }
  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: project.name,
      description: project.tagline,
      images: [{ url: project.coverImage }],
    },
  }
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  return (
    <>
      <Container className="mt-16 sm:mt-24">
        <article className="mx-auto max-w-3xl">
          <CaseStudyHero project={project} />

          <CaseStudySection eyebrow="Overview" title="What this project is.">
            <p>{project.overview}</p>
          </CaseStudySection>

          <CaseStudySection eyebrow="Problem" title="What needed solving.">
            <p>{project.problem}</p>
          </CaseStudySection>

          <CaseStudySection eyebrow="Solution" title="The approach.">
            <p>{project.solution}</p>
          </CaseStudySection>

          {project.features.length > 0 ? (
            <CaseStudySection eyebrow="Features" title="Key functionality.">
              <ul className="space-y-5">
                {project.features.map((feature) => (
                  <li key={feature.title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-subtle text-brand dark:bg-zinc-900"
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CaseStudySection>
          ) : null}

          {project.screenshots.length > 0 ? (
            <CaseStudySection eyebrow="UI Showcase" title="How it looks.">
              <UiShowcase screenshots={project.screenshots} />
            </CaseStudySection>
          ) : null}

          <CaseStudySection eyebrow="Outcome" title="The impact.">
            <p>{project.outcome}</p>
          </CaseStudySection>

          {project.techStack && project.techStack.length > 0 ? (
            <CaseStudySection eyebrow="Tech Stack" title="Built with.">
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </CaseStudySection>
          ) : null}
        </article>
      </Container>
      <CtaSection />
    </>
  )
}
