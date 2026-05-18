import Link from 'next/link'

import { Container } from '@/components/container.component'
import {
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
} from '@/components/icons.component'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Turning Ideas into Digital Reality with Code & Creativity
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Hey there! I&apos;m Wunna, a full-stack developer crafting exceptional
          digital experiences. With expertise in React, Next.js, and Node.js, I
          transform complex challenges into elegant, user-centric solutions.
        </p>
        <div className="mt-6 flex gap-6">
          <SocialLink
            href="https://www.facebook.com/mg.wunna.mandalay"
            aria-label="Follow on Facebook"
            icon={FacebookIcon}
          />
          <SocialLink
            href="https://github.com/mg-wunna"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <SocialLink
            href="https://www.linkedin.com/in/mg-wunna"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
        </div>
      </div>
    </Container>
  )
}
