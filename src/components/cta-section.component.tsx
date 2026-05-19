import Link from 'next/link'

import { Reveal } from '@/components/reveal.component'
import { CONTACT_EMAIL } from '@/constants/contact-channels'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-xl">
      <div
        aria-hidden="true"
        className="logo-grid-fade pointer-events-none absolute inset-0"
      >
        <div className="bg-logo-grid absolute inset-0" />
      </div>
      <div className="relative mx-auto max-w-editorial px-margin text-center">
        <Reveal>
          <p className="eyebrow">Let&rsquo;s build something</p>
          <h2 className="mt-md text-balance font-display text-headline-md font-medium text-on-surface sm:text-headline-lg">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-md max-w-prose text-body-lg text-secondary">
            Tell me about your business and what you want to build. I&rsquo;ll
            reply within 24 hours — usually with a thoughtful first take.
          </p>
          <div className="mt-md flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Start a project
            </Link>
            <Link href={`mailto:${CONTACT_EMAIL}`} className="btn-tertiary">
              {CONTACT_EMAIL}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
