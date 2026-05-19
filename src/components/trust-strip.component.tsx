import { RevealItem, RevealStagger } from '@/components/reveal.component'

const STATS = [
  { value: '5+', label: 'years building products' },
  { value: '20+', label: 'systems shipped' },
  { value: '100%', label: 'remote-first' },
  { value: '24h', label: 'response time' },
] as const

export function TrustStrip() {
  return (
    <section
      aria-label="Studio at a glance"
      className="border-y border-border bg-muted-surface py-lg"
    >
      <div className="mx-auto max-w-8xl px-margin">
        <RevealStagger
          as="dl"
          className="grid grid-cols-2 gap-x-gutter gap-y-md text-center lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <RevealItem key={stat.label}>
              <dd className="font-display text-headline-sm font-medium text-on-surface">
                {stat.value}
              </dd>
              <dt className="mt-2 text-body-sm text-secondary">{stat.label}</dt>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
