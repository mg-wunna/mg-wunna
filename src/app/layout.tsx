import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout.component'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Mg Wunna',
    default:
      'Mg Wunna - Turning Ideas into Digital Reality with Code & Creativity',
  },
  description:
    "Hey there! I'm Wunna, a full-stack developer crafting exceptional digital experiences from Myanmar. With expertise in React, Next.js, and Node.js, I transform complex challenges into elegant, user-centric solutions. My passion lies in building performant web applications that make a real impact.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
