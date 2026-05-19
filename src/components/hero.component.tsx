import Link from 'next/link'

import { Reveal } from '@/components/reveal.component'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pb-lg pt-lg sm:pb-xl sm:pt-xl">
      <div
        aria-hidden="true"
        className="logo-grid-fade pointer-events-none absolute inset-0"
      >
        <div className="bg-logo-grid absolute inset-0" />
      </div>
      <div className="relative mx-auto max-w-8xl px-margin text-center">
        <Reveal>
          <p className="eyebrow">Premium digital studio</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mx-auto mt-md max-w-5xl text-balance font-display text-headline-md font-medium text-on-surface sm:text-headline-lg lg:text-headline-display">
            Premium websites that help businesses grow online.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-md max-w-prose text-pretty text-body-lg text-secondary">
            I design and build modern, high-converting websites for businesses,
            startups, and creators — one client at a time.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-md flex flex-wrap items-center justify-center gap-3">
            <Link href="/work" className="btn-primary">
              View work
            </Link>
            <Link href="/contact" className="btn-secondary">
              Start a project
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
