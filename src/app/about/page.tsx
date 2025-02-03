import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/container.component'
import {
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from '@/components/icons.component'
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
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-red-500 dark:text-zinc-200 dark:hover:text-red-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-red-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Wunna"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m <span className="text-red-500">Wunna</span>. I live in{' '}
            <span className="text-red-500">Myanmar</span>, where I code the{' '}
            <span className="text-red-500">future</span>.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              <span className="mr-2 text-2xl">👋</span>
              I&apos;m a passionate Full Stack Developer with expertise in
              modern web technologies. My focus lies in creating elegant,
              user-centric solutions that combine beautiful design with robust
              functionality. I thrive on turning complex problems into simple,
              intuitive interfaces.
            </p>
            <p>
              <span className="mr-2 text-2xl">🎓</span>I am a self-taught
              developer who has built a strong foundation in software
              development through hands-on experience and continuous learning. I
              am passionate about staying current with modern programming
              paradigms and technologies through online courses, professional
              certifications, and practical project work. My journey proves that
              dedication and real-world experience can be just as valuable as
              traditional education.
            </p>
            <p>
              <span className="mr-2 text-2xl">💼</span>
              With over 5 years of experience in web development, I&apos;ve
              mastered technologies like React, Next.js, Node.js, and various
              cloud platforms. I specialize in building scalable web
              applications with a focus on performance, accessibility, and user
              experience. My approach combines technical expertise with creative
              problem-solving to deliver exceptional digital solutions.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.facebook.com/mg.wunna.mandalay"
              icon={FacebookIcon}
              className="mt-4"
            >
              Follow on Facebook
            </SocialLink>
            <SocialLink
              href="https://github.com/mg-wunna"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/mg-wunna"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:mgwunna@icloud.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              mgwunna@icloud.com
            </SocialLink>
            <SocialLink
              href="tel:+959777177317"
              icon={PhoneIcon}
              className="mt-4"
            >
              +959 777 177 317
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
