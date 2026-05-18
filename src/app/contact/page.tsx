import { type Metadata } from 'next'

import { CallRequest } from '@/components/call-request.component'
import { Container } from '@/components/container.component'
import { DirectContact } from '@/components/direct-contact.component'
import { LeadForm } from '@/components/lead-form.component'
import { RESPONSE_TIME } from '@/constants/contact-channels'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell me about your project. I usually respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <Container className="mt-16 sm:mt-24 lg:mt-28">
      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
          Tell me about your project.
        </h1>
        <p className="mt-6 text-lg text-zinc-600 sm:text-xl dark:text-zinc-400">
          {RESPONSE_TIME}
        </p>
      </header>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <LeadForm />
        </div>
        <aside className="space-y-8 lg:pl-4">
          <DirectContact />
          <CallRequest />
        </aside>
      </div>
    </Container>
  )
}
