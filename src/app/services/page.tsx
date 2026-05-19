import { type Metadata } from 'next'
import Link from 'next/link'

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
      <section className="preload-anim preload-delay-200 bg-background pb-lg pt-lg sm:pb-xl sm:pt-xl">
        <div className="mx-auto max-w-8xl px-margin">
          <header className="max-w-3xl">
            <p className="eyebrow">Services</p>
            <h1 className="mt-md text-balance font-display text-headline-md font-medium text-on-surface sm:text-headline-lg">
              Built around how businesses actually grow.
            </h1>
            <p className="mt-md max-w-2xl text-body-lg text-secondary">
              Four focused offerings. Pick the one that matches where you are
              today — or get in touch and we will figure it out together.
            </p>
          </header>
        </div>
      </section>

      <section className="border-t border-border bg-background pb-xl pt-md">
        <div className="mx-auto max-w-8xl px-margin">
          <div className="grid grid-cols-1 gap-x-gutter gap-y-lg lg:grid-cols-[16rem_1fr]">
            <nav
              aria-label="Services"
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <p className="eyebrow">Jump to</p>
              <ul className="mt-3 space-y-2 text-body-md">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`#${service.id}`}
                      className="block text-secondary transition-colors hover:text-on-surface"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-lg">
              {SERVICES.map((service, idx) => (
                <ServiceDetailBlock
                  key={service.id}
                  service={service}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
