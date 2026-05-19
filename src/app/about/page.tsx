import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { CtaSection } from '@/components/cta-section.component'
import { Reviews } from '@/components/reviews.component'
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
        className="focus-ring group flex items-center text-body-md text-on-surface transition-colors hover:text-primary focus-visible:rounded-sm"
      >
        <Icon className="h-5 w-5 flex-none fill-secondary transition-colors group-hover:fill-primary" />
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
      <section className="preload-anim preload-delay-200 bg-background pb-lg pt-lg sm:pb-xl sm:pt-xl">
        <div className="mx-auto max-w-8xl px-margin">
          <div className="grid grid-cols-1 gap-y-lg lg:grid-cols-[1fr_minmax(0,22rem)] lg:grid-rows-[auto_1fr] lg:gap-x-lg">
            <div>
              <div className="max-w-xs lg:max-w-none">
                <div className="overflow-hidden rounded-lg border border-border">
                  <Image
                    src="/images/avatar.png"
                    alt="Wunna"
                    width={1284}
                    height={1284}
                    sizes="(min-width: 1024px) 22rem, 20rem"
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <p className="eyebrow">About</p>
              <h1 className="mt-md text-balance font-display text-headline-md font-medium text-on-surface sm:text-headline-lg">
                I&rsquo;m Wunna. I build premium websites that help businesses
                grow.
              </h1>
              <div className="mt-md space-y-md text-body-lg text-secondary">
                <p>
                  I am a product-minded full-stack developer based in Bangkok. I
                  work remotely with companies across Southeast Asia, including
                  a backend lead role at Returning AI in Singapore.
                </p>
                <p>
                  My focus is on small businesses, startup founders, and
                  creators who want a web presence that feels premium and
                  actually drives results — not a generic template, not a
                  showcase of every framework I know.
                </p>
                <p>
                  Every project starts with the question that matters most: what
                  does success look like for your business? Then design,
                  engineering, and content choices flow from that.
                </p>
                <p>
                  I keep the scope honest, the timeline predictable, and the
                  final build modern, fast, and easy to live with.
                </p>
              </div>
            </div>

            <div>
              <ul role="list" className="space-y-3">
                <SocialLink
                  href="https://github.com/mg-wunna"
                  icon={GitHubIcon}
                >
                  GitHub
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/mg-wunna"
                  icon={LinkedInIcon}
                >
                  LinkedIn
                </SocialLink>
                <SocialLink
                  href={`mailto:${CONTACT_EMAIL}`}
                  icon={MailIcon}
                  className="border-t border-border pt-md"
                >
                  {CONTACT_EMAIL}
                </SocialLink>
                <SocialLink href={CONTACT_PHONE_PRIMARY.href} icon={PhoneIcon}>
                  {CONTACT_PHONE_PRIMARY.label} (Thailand)
                </SocialLink>
                <SocialLink
                  href={CONTACT_PHONE_SECONDARY.href}
                  icon={PhoneIcon}
                >
                  {CONTACT_PHONE_SECONDARY.label} (Myanmar)
                </SocialLink>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
      <CtaSection />
    </>
  )
}
