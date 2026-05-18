import { Button } from '@/components/button.component'
import { Container } from '@/components/container.component'
import { CONTACT_EMAIL } from '@/constants/contact-channels'

export function CtaSection() {
  return (
    <Container className="mt-24 sm:mt-32">
      <div className="overflow-hidden rounded-3xl bg-zinc-50 px-6 py-16 sm:px-12 sm:py-20 lg:py-24 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            Let&rsquo;s build a modern website for your business.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="brand" size="lg">
              Start a project
            </Button>
            <Button href={`mailto:${CONTACT_EMAIL}`} variant="ghost" size="lg">
              {CONTACT_EMAIL}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
