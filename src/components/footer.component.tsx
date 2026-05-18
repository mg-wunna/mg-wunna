import Link from 'next/link'

import {
  ContainerInner,
  ContainerOuter,
} from '@/components/container.component'
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_PRIMARY,
} from '@/constants/contact-channels'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-red-500 dark:hover:text-red-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 flex-none sm:mt-32">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-800">
          <ContainerInner>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/work">Work</NavLink>
                  <NavLink href="/services">Services</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                  <Link
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="transition hover:text-red-500 dark:hover:text-red-400"
                  >
                    {CONTACT_EMAIL}
                  </Link>
                  <span
                    aria-hidden="true"
                    className="text-zinc-300 dark:text-zinc-700"
                  >
                    ·
                  </span>
                  <Link
                    href={CONTACT_PHONE_PRIMARY.href}
                    className="transition hover:text-red-500 dark:hover:text-red-400"
                  >
                    {CONTACT_PHONE_PRIMARY.label}
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-2 text-xs text-zinc-400 sm:flex-row dark:text-zinc-500">
                <p>
                  &copy; {new Date().getFullYear()} Mg Wunna. All rights
                  reserved.
                </p>
                <p>Studio based in {CONTACT_LOCATION}.</p>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
