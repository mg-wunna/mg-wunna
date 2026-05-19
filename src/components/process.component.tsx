import {
  Reveal,
  RevealItem,
  RevealStagger,
} from '@/components/reveal.component'
import { PROCESS_STEPS } from '@/constants/process'

export function Process() {
  return (
    <section className="border-t border-border bg-background py-xl">
      <div className="mx-auto max-w-8xl px-margin">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Process</p>
            <h2 className="mt-2 text-balance font-display text-headline-md font-medium text-on-surface">
              A structured path from idea to launch.
            </h2>
            <p className="mt-md max-w-prose text-body-lg text-secondary">
              Five clear steps so you always know what is happening and what is
              next. No surprises, no jargon — just the work moving forward.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="mt-lg border-t border-border">
          <ol>
            {PROCESS_STEPS.map((item, idx) => (
              <RevealItem
                key={item.step}
                as="li"
                className="group grid grid-cols-12 items-start gap-sm border-b border-border px-sm py-lg transition-colors hover:bg-muted-surface md:gap-md md:px-md md:py-xl"
              >
                <span className="col-span-12 font-display text-headline-md font-medium text-secondary transition-colors group-hover:text-on-surface md:col-span-3 md:text-headline-lg lg:col-span-2">
                  {String(item.step).padStart(2, '0')}
                </span>
                <div className="col-span-12 md:col-span-9 lg:col-span-7">
                  <h3 className="font-display text-headline-sm font-medium text-on-surface">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-prose text-body-lg text-secondary">
                    {item.description}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden text-label-sm font-medium uppercase tracking-[0.04em] text-secondary lg:col-span-3 lg:block lg:text-right"
                >
                  {idx === PROCESS_STEPS.length - 1
                    ? 'Launch'
                    : `Step ${item.step}`}
                </span>
              </RevealItem>
            ))}
          </ol>
        </RevealStagger>
      </div>
    </section>
  )
}
