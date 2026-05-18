import {
  ArrowUpRight,
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
}

export function ServiceCard({ service, href }: ServiceCardProps) {
  const Icon = iconMap[service.icon]
  const linkHref = href ?? `/services#${service.id}`

  return (
    <Link
      href={linkHref}
      className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition duration-220 ease-enter hover:border-zinc-300 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-subtle text-brand dark:bg-zinc-900 dark:text-brand">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </div>
        <ArrowUpRight
          className="h-5 w-5 text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand motion-reduce:transform-none dark:text-zinc-600"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {service.summary}
      </p>
    </Link>
  )
}
