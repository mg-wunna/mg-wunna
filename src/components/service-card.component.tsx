import {
  ArrowRight,
  Globe,
  LayoutDashboard,
  RefreshCcw,
  Rocket,
  type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'

import { type Service, type ServiceIcon } from '@/types/service.type'

const iconMap: Record<ServiceIcon, LucideIcon> = {
  globe: Globe,
  refresh: RefreshCcw,
  'layout-dashboard': LayoutDashboard,
  rocket: Rocket,
}

interface ServiceCardProps {
  service: Service
  href?: string
  index?: number
}

export function ServiceCard({ service, href, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon]
  const linkHref = href ?? `/services#${service.id}`
  const number = String((index ?? 0) + 1).padStart(2, '0')

  return (
    <Link
      href={linkHref}
      className="focus-ring group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface p-md transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-on-surface hover:shadow-[0_24px_48px_-20px_rgb(0_0_0_/_0.18)] md:p-lg"
    >
      <span
        aria-hidden="true"
        className="bg-logo-corner pointer-events-none absolute right-0 top-0 h-40 w-40 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-md">
        <span className="font-display text-headline-lg font-medium leading-none text-on-surface/15 transition-colors duration-300 group-hover:text-on-surface/30">
          {number}
        </span>
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-md border border-border bg-tertiary text-on-surface transition-colors duration-300 group-hover:border-on-surface group-hover:bg-on-surface group-hover:text-background">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
      </div>

      <div className="relative mt-lg flex flex-1 flex-col">
        <h3 className="font-display text-headline-sm font-medium text-on-surface">
          {service.title}
        </h3>
        <p className="mt-2 text-body-md text-secondary">{service.summary}</p>
      </div>

      <div className="relative mt-md flex items-center justify-between border-t border-border pt-md">
        <span className="text-label-md font-medium text-secondary transition-colors duration-200 group-hover:text-on-surface">
          Learn more
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-tertiary text-on-surface transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-on-surface group-hover:bg-on-surface group-hover:text-background">
          <ArrowRight
            className="h-4 w-4"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
