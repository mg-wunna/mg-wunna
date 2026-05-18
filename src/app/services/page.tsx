import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/container.component'
import { CtaSection } from '@/components/cta-section.component'
import { ServiceDetailBlock } from '@/components/service-detail-block.component'
import { SERVICES } from '@/constants/services'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Business websites, website redesigns, web systems, and startup MVPs — designed to help businesses grow online.',
}

export default function ServicesPage() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
            Built around how businesses actually grow.
          </h1>
          <p className="mt-6 text-lg text-zinc-600 sm:text-xl dark:text-zinc-400">
            Four focused offerings. Pick the one that matches where you are
            today — or get in touch and we will figure it out together.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-[16rem_1fr]">
          <nav
            aria-label="Services"
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Jump to
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`#${service.id}`}
                    className="block rounded-md py-1 text-zinc-700 transition hover:text-brand dark:text-zinc-300 dark:hover:text-brand"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-16">
            {SERVICES.map((service) => (
              <ServiceDetailBlock key={service.id} service={service} />
            ))}
          </div>
        </div>
      </Container>
      <CtaSection />
    </>
  )
}
