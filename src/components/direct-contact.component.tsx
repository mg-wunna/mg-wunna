import {
  Mail,
  MessageCircle,
  MessageSquareText,
  Phone,
  type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'

import {
  CONTACT_EMAIL,
  CONTACT_PHONE_PRIMARY,
  CONTACT_PHONE_SECONDARY,
  CONTACT_TELEGRAM,
  CONTACT_WHATSAPP,
} from '@/constants/contact-channels'

interface Channel {
  icon: LucideIcon
  label: string
  value: string
  href: string
  hint?: string
}

const channels: Channel[] = [
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Phone,
    label: 'Phone (Thailand)',
    value: CONTACT_PHONE_PRIMARY.label,
    href: CONTACT_PHONE_PRIMARY.href,
    hint: 'Primary',
  },
  {
    icon: Phone,
    label: 'Phone (Myanmar)',
    value: CONTACT_PHONE_SECONDARY.label,
    href: CONTACT_PHONE_SECONDARY.href,
    hint: 'Secondary',
  },
  {
    icon: MessageSquareText,
    label: 'Telegram',
    value: '@mgwunna',
    href: CONTACT_TELEGRAM.href,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: CONTACT_WHATSAPP.href,
  },
]

export function DirectContact() {
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
        Or reach out directly
      </p>
      <ul className="mt-4 space-y-3">
        {channels.map((channel) => {
          const Icon = channel.icon
          return (
            <li key={channel.label}>
              <Link
                href={channel.href}
                className="group flex items-center gap-4 rounded-xl border border-zinc-200 bg-white px-4 py-3 transition hover:border-zinc-300 hover:shadow-card dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 transition group-hover:bg-brand-subtle group-hover:text-brand dark:bg-zinc-800 dark:text-zinc-300">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    {channel.label}
                    {channel.hint ? (
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] uppercase tracking-wide text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                        {channel.hint}
                      </span>
                    ) : null}
                  </span>
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {channel.value}
                  </span>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
