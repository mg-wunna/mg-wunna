import { Mail, MessageSquareText, Phone, type LucideIcon } from 'lucide-react'
import Link from 'next/link'

import {
  CONTACT_EMAIL,
  CONTACT_PHONE_PRIMARY,
  CONTACT_PHONE_SECONDARY,
  CONTACT_TELEGRAM,
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
    value: CONTACT_TELEGRAM.username,
    href: CONTACT_TELEGRAM.href,
  },
]

export function DirectContact() {
  return (
    <div>
      <p className="eyebrow">Or reach out directly</p>
      <ul className="mt-3 space-y-3">
        {channels.map((channel) => {
          const Icon = channel.icon
          return (
            <li key={channel.label}>
              <Link
                href={channel.href}
                className="focus-ring group flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-3 transition-colors hover:border-on-surface"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-md border border-border bg-tertiary text-on-surface">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="flex items-center gap-2 text-caption text-secondary">
                    {channel.label}
                    {channel.hint ? (
                      <span className="chip">{channel.hint}</span>
                    ) : null}
                  </span>
                  <span className="text-body-md text-on-surface">
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
