import {
  ArrowUpRight,
  Clock,
  Globe,
  LayoutDashboard,
  RefreshCcw,
  Rocket,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

import { type Service, type ServiceIcon } from '@/types/service.type'

const iconMap: Record<ServiceIcon, LucideIcon> = {
  globe: Globe,
  refresh: RefreshCcw,
  'layout-dashboard': LayoutDashboard,
  rocket: Rocket,
}

interface ServiceDetailBlockProps {
  service: Service
  index: number
}

export function ServiceDetailBlock({
  service,
  index,
}: ServiceDetailBlockProps) {
  const Icon = iconMap[service.icon]

  return (
    <section
      id={service.id}
      aria-labelledby={`${service.id}-heading`}
      className="scroll-mt-24 border-t border-border pt-lg first:border-t-0 first:pt-0"
    >
      <div className="flex items-center justify-between gap-md">
        <p className="eyebrow">{service.timeline ?? 'Custom timeline'}</p>
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-md border border-border bg-tertiary text-on-surface">
          <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </div>
      </div>

      <div className="mt-md flex items-baseline gap-md md:gap-lg">
        <span className="font-display text-headline-md font-medium leading-none text-secondary md:text-headline-lg">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2
          id={`${service.id}-heading`}
          className="text-balance font-display text-headline-sm font-medium leading-none text-on-surface md:text-headline-md"
        >
          {service.title}
        </h2>
      </div>

      <p className="mt-md max-w-3xl text-body-lg text-secondary">
        {service.summary}
      </p>
      <p className="mt-3 max-w-3xl text-body-md text-secondary">
        {service.description}
      </p>

      <div className="mt-lg grid grid-cols-1 gap-gutter lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="flex items-baseline justify-between border-b border-border pb-3">
            <h3 className="eyebrow">What you get</h3>
            <span className="text-label-sm text-secondary">
              {service.deliverables.length} deliverables
            </span>
          </div>
          <ol className="divide-y divide-border">
            {service.deliverables.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-md py-3 text-body-md text-on-surface"
              >
                <span className="w-6 flex-none pt-0.5 font-display text-label-sm tabular-nums text-secondary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-md lg:col-span-5">
          <div className="rounded-md border border-border bg-tertiary p-md">
            <div className="flex items-center gap-2">
              <Clock
                className="h-4 w-4 text-secondary"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <h3 className="eyebrow">Timeline</h3>
            </div>
            {service.timeline ? (
              <p className="mt-3 font-display text-headline-sm font-medium text-on-surface">
                {service.timeline}
              </p>
            ) : null}
            <p className="mt-2 text-body-sm text-secondary">
              Fixed scope, fixed timeline. Discovery happens before the clock
              starts.
            </p>
          </div>

          <div className="rounded-md border border-border bg-tertiary p-md">
            <h3 className="eyebrow">Ideal for</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {service.idealFor.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
            {service.startingPrice ? (
              <p className="mt-md text-body-sm text-secondary">
                Starting at{' '}
                <span className="font-medium text-on-surface">
                  {service.startingPrice}
                </span>
              </p>
            ) : null}
          </div>
        </div>
      </div>

      {service.example ? (
        <div className="mt-md rounded-lg border border-border bg-muted-surface p-md md:p-lg">
          <div className="flex items-center gap-2">
            <Sparkles
              className="h-4 w-4 text-secondary"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <h3 className="eyebrow">Typical project</h3>
          </div>
          <p className="mt-3 max-w-3xl text-balance font-display text-body-lg font-medium text-on-surface md:text-subheadline">
            {service.example}
          </p>
          <div className="mt-md flex items-center gap-2 text-label-sm text-secondary">
            <ArrowUpRight
              className="h-4 w-4"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <span>A grounded example of what shipping this looks like.</span>
          </div>
        </div>
      ) : null}
    </section>
  )
}
