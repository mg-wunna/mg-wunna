import { type Metadata } from 'next'

import { CtaSection } from '@/components/cta-section.component'
import { FeaturedProjectHero } from '@/components/featured-project-hero.component'
import { ProjectCard } from '@/components/project-card.component'
import { Reveal } from '@/components/reveal.component'
import { getAllProjects, getFeaturedProjects } from '@/utilities/projects'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected business websites, redesigns, web systems, and startup MVPs built to help businesses grow online.',
}

export default function WorkPage() {
  const all = getAllProjects()
  const featured = getFeaturedProjects()
  const featuredSlugs = new Set(featured.map((p) => p.slug))
  const secondary = all.filter((p) => !featuredSlugs.has(p.slug))

  return (
    <>
      <section className="bg-background pb-lg pt-lg sm:pb-xl sm:pt-xl">
        <div className="mx-auto max-w-8xl px-margin">
          <Reveal>
            <header className="max-w-3xl">
              <p className="eyebrow">Selected work</p>
              <h1 className="mt-md text-balance font-display text-headline-md font-medium text-on-surface sm:text-headline-lg">
                Work that helps businesses grow online.
              </h1>
              <p className="mt-md max-w-2xl text-body-lg text-secondary">
                A few of the projects I have designed and shipped — each built
                to help a business or founder reach the next stage of growth.
              </p>
            </header>
          </Reveal>
        </div>
      </section>

      {featured.length > 0 ? (
        <section className="bg-background py-lg">
          <div className="mx-auto max-w-8xl px-margin">
            <div className="grid grid-cols-1 gap-x-gutter gap-y-xl lg:grid-cols-2">
              {featured.map((project, idx) => (
                <Reveal key={project.slug} loose>
                  <FeaturedProjectHero project={project} priority={idx === 0} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {secondary.length > 0 ? (
        <section className="border-t border-border bg-background py-xl">
          <div className="mx-auto max-w-8xl px-margin">
            <Reveal>
              <p className="eyebrow">More work</p>
              <h2 className="mt-2 font-display text-headline-md font-medium text-on-surface">
                Other projects.
              </h2>
            </Reveal>
            <div className="mt-lg grid grid-cols-1 gap-x-gutter gap-y-md md:grid-cols-2">
              {secondary.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaSection />
    </>
  )
}
