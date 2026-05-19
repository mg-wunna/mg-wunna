import { Check } from 'lucide-react'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CaseStudyCover } from '@/components/case-study-cover.component'
import { CaseStudyGallery } from '@/components/case-study-gallery.component'
import { CaseStudyMeta } from '@/components/case-study-meta.component'
import { CaseStudyMetrics } from '@/components/case-study-metrics.component'
import { CaseStudyNext } from '@/components/case-study-next.component'
import { CaseStudyStory } from '@/components/case-study-story.component'
import { CtaSection } from '@/components/cta-section.component'
import {
  getAllProjects,
  getNextProject,
  getProjectBySlug,
} from '@/utilities/projects'

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

  const nextProject = getNextProject(params.slug)

  return (
    <>
      <CaseStudyCover project={project} />
      <CaseStudyMeta project={project} />

      <CaseStudyStory eyebrow="Overview" title="What this project is.">
        <p>{project.overview}</p>
      </CaseStudyStory>

      <CaseStudyStory
        eyebrow="Problem"
        title="What needed solving."
        surface="muted"
      >
        <p>{project.problem}</p>
      </CaseStudyStory>

      <CaseStudyStory eyebrow="Solution" title="The approach.">
        <p>{project.solution}</p>
      </CaseStudyStory>

      {project.metrics && project.metrics.length > 0 ? (
        <CaseStudyMetrics metrics={project.metrics} />
      ) : null}

      {project.features.length > 0 ? (
        <CaseStudyStory
          eyebrow="Features"
          title="Key functionality."
          surface="muted"
        >
          <ul className="space-y-md">
            {project.features.map((feature) => (
              <li key={feature.title} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-surface"
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="text-body-lg font-medium text-on-surface">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-body-md text-secondary">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </CaseStudyStory>
      ) : null}

      {project.screenshots.length > 0 ? (
        <CaseStudyGallery screenshots={project.screenshots} />
      ) : null}

      <CaseStudyStory eyebrow="Outcome" title="The impact.">
        <p>{project.outcome}</p>
      </CaseStudyStory>

      {nextProject && nextProject.slug !== project.slug ? (
        <CaseStudyNext project={nextProject} />
      ) : null}

      <CtaSection />
    </>
  )
}
