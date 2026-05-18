import {
  Check,
  Globe,
  LayoutDashboard,
  RefreshCcw,
  Rocket,
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
}

export function ServiceDetailBlock({ service }: ServiceDetailBlockProps) {
  const Icon = iconMap[service.icon]

  return (
    <section
      id={service.id}
      aria-labelledby={`${service.id}-heading`}
      className="scroll-mt-24 border-t border-zinc-200 pt-16 first:border-t-0 first:pt-0 dark:border-zinc-800"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-subtle text-brand dark:bg-zinc-900">
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h2
        id={`${service.id}-heading`}
        className="mt-6 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
      >
        {service.title}
      </h2>
      <p className="mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
        {service.description}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            What is included
          </h3>
          <ul className="mt-4 space-y-3">
            {service.deliverables.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base text-zinc-700 dark:text-zinc-300"
              >
                <Check
                  className="mt-1 h-4 w-4 flex-none text-brand"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Ideal for
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {service.idealFor.map((item) => (
              <li
                key={item}
                className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
          {service.startingPrice ? (
            <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
              Starting at{' '}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {service.startingPrice}
              </span>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
