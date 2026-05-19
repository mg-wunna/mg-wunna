import { type Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout.component'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// Free Rogan substitute for Morflax display headlines (headline-display / headline-lg).
const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
})

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mg-wunna.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    url: '/',
    locale: 'en_US',
    // OG/Twitter image picked up via src/app/opengraph-image.png + twitter-image.png conventions.
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
      className={`antialiased ${inter.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/logo-light.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/logo-dark.svg"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-background text-on-surface">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
