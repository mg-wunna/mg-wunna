import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/container.component'
import { CtaSection } from '@/components/cta-section.component'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from '@/components/icons.component'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_PRIMARY,
  CONTACT_PHONE_SECONDARY,
} from '@/constants/contact-channels'
import portraitImage from '@/images/portrait.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-brand dark:text-zinc-200 dark:hover:text-brand"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-brand" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I design and build premium websites and web systems for businesses, startups, and creators. Based in Bangkok, working remotely with teams across SE Asia.',
}

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Wunna"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
              About
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
              I&rsquo;m Wunna. I build premium websites that help businesses
              grow.
            </h1>
            <div className="mt-8 space-y-6 text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
              <p>
                I am a product-minded full-stack developer based in Bangkok. I
                work remotely with companies across Southeast Asia, including a
                backend lead role at Returning AI in Singapore.
              </p>
              <p>
                My focus is on small businesses, startup founders, and creators
                who want a web presence that feels premium and actually drives
                results — not a generic template, not a showcase of every
                framework I know.
              </p>
              <p>
                Every project starts with the question that matters most: what
                does success look like for your business? Then design,
                engineering, and content choices flow from that.
              </p>
              <p>
                I keep the scope honest, the timeline predictable, and the final
                build modern, fast, and easy to live with.
              </p>
            </div>
          </div>

          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/mg-wunna"
                icon={GitHubIcon}
                className="mt-4"
              >
                GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/mg-wunna"
                icon={LinkedInIcon}
                className="mt-4"
              >
                LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${CONTACT_EMAIL}`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                {CONTACT_EMAIL}
              </SocialLink>
              <SocialLink
                href={CONTACT_PHONE_PRIMARY.href}
                icon={PhoneIcon}
                className="mt-4"
              >
                {CONTACT_PHONE_PRIMARY.label} (Thailand)
              </SocialLink>
              <SocialLink
                href={CONTACT_PHONE_SECONDARY.href}
                icon={PhoneIcon}
                className="mt-4"
              >
                {CONTACT_PHONE_SECONDARY.label} (Myanmar)
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
      <CtaSection />
    </>
  )
}
