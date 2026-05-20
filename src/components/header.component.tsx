'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'
import { Menu, Moon, Sun, X } from 'lucide-react'

const NAV_ITEMS: { href: string; label: string; includes?: boolean }[] = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work', includes: true },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blogs', includes: true },
  { href: '/about', label: 'About' },
]

function Logotype() {
  return (
    <Link
      href="/"
      aria-label="Mg Wunna — Home"
      className="focus-ring inline-flex items-center gap-2 focus-visible:rounded-sm"
    >
      <Image
        src="/logo-light.svg"
        alt=""
        width={28}
        height={28}
        priority
        className="h-7 w-7 dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt=""
        width={28}
        height={28}
        priority
        className="hidden h-7 w-7 dark:block"
      />
      <span className="text-nav font-medium text-on-surface">Mg Wunna</span>
    </Link>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const next = resolvedTheme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${next} theme` : 'Toggle theme'}
      onClick={() => setTheme(next)}
      className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full text-secondary transition-colors hover:text-on-surface"
    >
      <Sun
        className="h-4 w-4 dark:hidden"
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <Moon
        className="hidden h-4 w-4 dark:block"
        strokeWidth={1.75}
        aria-hidden="true"
      />
    </button>
  )
}

function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary" className="hidden md:block">
      <ul className="flex items-center gap-8 text-nav text-secondary">
        {NAV_ITEMS.map((item) => {
          const isActive = item.includes
            ? pathname.startsWith(item.href) && item.href !== '/'
            : pathname === item.href
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={clsx(
                  'focus-ring transition-colors focus-visible:rounded-sm',
                  isActive ? 'text-on-surface' : 'hover:text-on-surface',
                )}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function ContactCta() {
  return (
    <Link href="/contact" className="btn-primary hidden md:inline-flex">
      Start a project
    </Link>
  )
}

function MobileNav() {
  return (
    <Popover className="md:hidden">
      <PopoverButton
        aria-label="Open menu"
        className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full text-secondary hover:text-on-surface"
      >
        <Menu className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-40 bg-overlay backdrop-blur-sm duration-200 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-4 z-50 origin-top rounded-lg border border-border bg-surface p-md duration-200 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="flex items-center justify-between">
          <span className="eyebrow">Menu</span>
          <PopoverButton
            aria-label="Close menu"
            className="-m-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-secondary hover:text-on-surface"
          >
            <X className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          </PopoverButton>
        </div>
        <ul className="mt-6 divide-y divide-border text-body-lg text-on-surface">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <PopoverButton
                as={Link}
                href={item.href}
                className="block py-3 transition-colors hover:text-primary"
              >
                {item.label}
              </PopoverButton>
            </li>
          ))}
          <li>
            <PopoverButton
              as={Link}
              href="/contact"
              className="block py-3 transition-colors hover:text-primary"
            >
              Contact
            </PopoverButton>
          </li>
        </ul>
      </PopoverPanel>
    </Popover>
  )
}

function useHeaderVisibility() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const HIDE_THRESHOLD = 8
    const TOP_OFFSET = 80

    let lastY = window.scrollY
    let ticking = false

    const update = () => {
      const y = window.scrollY
      ticking = false

      if (y < TOP_OFFSET) {
        setHidden(false)
      } else if (y > lastY + HIDE_THRESHOLD) {
        setHidden(true)
      } else if (y < lastY) {
        setHidden(false)
      }

      lastY = y
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return hidden
}

export function Header() {
  const hidden = useHeaderVisibility()
  const [introDone, setIntroDone] = useState(false)

  return (
    <header
      onAnimationEnd={() => setIntroDone(true)}
      className={clsx(
        'fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl transition-transform duration-300 ease-out motion-reduce:transition-none',
        !introDone && 'preload-anim-header',
        hidden ? '-translate-y-full' : 'translate-y-0',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-8xl items-center justify-between px-margin">
        <Logotype />
        <DesktopNav />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <ContactCta />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
