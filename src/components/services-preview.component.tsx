import Link from 'next/link'

import {
  Reveal,
  RevealItem,
  RevealStagger,
} from '@/components/reveal.component'
import { ServiceCard } from '@/components/service-card.component'
import { SERVICES } from '@/constants/services'

export function ServicesPreview() {
  return (
    <section className="border-t border-border bg-background py-xl">
      <div className="mx-auto max-w-8xl px-margin">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="max-w-2xl">
              <p className="eyebrow">What I do</p>
              <h2 className="mt-2 font-display text-headline-md font-medium text-on-surface">
                Designed and built for the work that moves the needle.
              </h2>
            </div>
            <Link href="/services" className="btn-tertiary">
              All services →
            </Link>
          </div>
        </Reveal>

        <RevealStagger className="mt-lg grid grid-cols-1 gap-gutter sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <RevealItem key={service.id} className="h-full">
              <ServiceCard service={service} index={i} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
