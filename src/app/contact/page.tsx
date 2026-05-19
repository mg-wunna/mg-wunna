import { type Metadata } from 'next'
import { Clock, Sparkles } from 'lucide-react'

import { DirectContact } from '@/components/direct-contact.component'
import { LeadForm } from '@/components/lead-form.component'
import { WhatHappensNext } from '@/components/what-happens-next.component'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell me about your project. I read every message and reply within 24 hours.',
}

export default function ContactPage() {
  return (
    <>
      <section className="preload-anim preload-delay-200 bg-background pb-md pt-lg sm:pt-xl">
        <div className="mx-auto max-w-8xl px-margin">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-tertiary px-3 py-1 text-label-sm text-on-surface">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for 2026 projects
            </span>
            <span className="inline-flex items-center gap-1.5 text-label-sm text-secondary">
              <Clock
                className="h-3.5 w-3.5"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              Replies within 24 hours
            </span>
          </div>

          <p className="eyebrow mt-md">Contact</p>
          <h1 className="mt-md max-w-4xl text-balance font-display text-headline-md font-medium text-on-surface sm:text-headline-lg lg:text-headline-display">
            Let&rsquo;s build something good together.
          </h1>
          <p className="mt-md max-w-2xl text-body-lg text-secondary">
            The more I know about your business, your goals, and your timeline,
            the faster I can give you a useful first reply. No copy-paste
            templates — every reply is written by me.
          </p>
        </div>
      </section>

      <section className="bg-background pb-xl pt-md">
        <div className="mx-auto max-w-8xl px-margin">
          <div className="grid grid-cols-1 gap-lg lg:grid-cols-[1.45fr_1fr] lg:gap-xl">
            <div className="rounded-lg border border-border bg-surface p-md md:p-lg">
              <div className="flex items-center gap-2 text-secondary">
                <Sparkles
                  className="h-4 w-4"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p className="eyebrow text-secondary">Project intake</p>
              </div>
              <h2 className="mt-3 font-display text-headline-sm font-medium text-on-surface md:text-headline-md">
                Tell me about your project.
              </h2>
              <p className="mt-3 max-w-2xl text-body-md text-secondary">
                Four short sections. Most people finish it in under three
                minutes.
              </p>

              <div className="mt-lg">
                <LeadForm />
              </div>
            </div>

            <aside className="space-y-xl lg:sticky lg:top-24 lg:self-start">
              <WhatHappensNext />
              <DirectContact />
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
