import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout.component'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s — Mg Wunna',
    default:
      'Mg Wunna — Premium websites designed to help businesses grow online',
  },
  description:
    'I design and build modern, high-converting websites for businesses, startups, and creators. Business websites, redesigns, web systems, and startup MVPs.',
  keywords:
    'Mg Wunna, web design, web development, business website, website redesign, MVP development, startup, dashboard, admin panel, freelance studio, premium website',
  openGraph: {
    type: 'website',
    title:
      'Mg Wunna — Premium websites designed to help businesses grow online',
    description:
      'I design and build modern, high-converting websites for businesses, startups, and creators.',
    url: 'https://mg-wunna.vercel.app/',
    locale: 'en_US',
    images: [
      {
        url: 'https://mg-wunna.vercel.app/thumbnail.png',
        width: 1280,
        height: 720,
        alt: 'Mg Wunna — Premium digital studio',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable}`}
      suppressHydrationWarning
    >
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
