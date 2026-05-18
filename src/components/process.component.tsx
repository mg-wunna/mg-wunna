import { Container } from '@/components/container.component'
import { SectionHeading } from '@/components/section-heading.component'
import { PROCESS_STEPS } from '@/constants/process'

export function Process() {
  return (
    <Container className="mt-24 sm:mt-32">
      <SectionHeading
        eyebrow="Process"
        title="A structured path from idea to launch."
        description="Five clear steps so you always know what is happening and what is next."
      />
      <ol className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {PROCESS_STEPS.map((item) => (
          <li key={item.step} className="relative">
            <div
              aria-hidden="true"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-brand"
            >
              {String(item.step).padStart(2, '0')}
            </div>
            <h3 className="mt-3 text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Container>
  )
}
