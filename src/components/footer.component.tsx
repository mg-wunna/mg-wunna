import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_PRIMARY,
  CONTACT_TELEGRAM,
} from '@/constants/contact-channels'

const NAV_GROUPS: {
  title: string
  links: { label: string; href: string }[]
}[] = [
  {
    title: 'Studio',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Work', href: '/work' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'About', href: '/about' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Business Websites', href: '/services#business-websites' },
      { label: 'Website Redesigns', href: '/services#website-redesigns' },
      { label: 'Web Systems', href: '/services#web-systems' },
      { label: 'MVP Development', href: '/services#mvp-development' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Start a project', href: '/contact' },
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
      { label: CONTACT_PHONE_PRIMARY.label, href: CONTACT_PHONE_PRIMARY.href },
      { label: 'Telegram', href: CONTACT_TELEGRAM.href },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background text-secondary">
      <div className="mx-auto w-full max-w-8xl px-margin py-xl">
        <div className="grid grid-cols-1 gap-lg lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="focus-ring inline-flex items-center gap-2 focus-visible:rounded-sm"
              aria-label="Mg Wunna — Home"
            >
              <Image
                src="/logo-light.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 dark:hidden"
              />
              <Image
                src="/logo-dark.svg"
                alt=""
                width={32}
                height={32}
                className="hidden h-8 w-8 dark:block"
              />
              <span className="text-subheadline font-medium text-on-surface">
                Mg Wunna
              </span>
            </Link>
            <p className="mt-md max-w-md text-body-md text-secondary">
              Premium websites and scalable systems for businesses, startups,
              and creators — designed and built one project at a time.
            </p>
            <Link href="/contact" className="btn-primary mt-md">
              Available for 2026 projects
              <ArrowUpRight
                className="h-4 w-4"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-md lg:col-span-7 lg:grid-cols-3 lg:gap-gutter">
            {NAV_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="eyebrow">{group.title}</h3>
                <ul className="mt-sm space-y-3 text-body-md text-secondary">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="focus-ring transition-colors hover:text-on-surface focus-visible:rounded-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-lg flex flex-col items-start justify-between gap-3 border-t border-border pt-md text-caption text-secondary sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Mg Wunna · Studio based in{' '}
            {CONTACT_LOCATION}.
          </p>
          <p>Designed and built in-house.</p>
        </div>
      </div>
    </footer>
  )
}
