import { type Project } from '@/types/project.type'

// Placeholder data. Replace each entry with real project info, then
// drop screenshots into /public/images/projects/<slug>/ and update the
// coverImage + screenshots paths to absolute /images/... URLs.
export const PROJECTS: Project[] = [
  {
    slug: 'dana',
    name: 'Dana',
    category: 'saas-mvp',
    tagline:
      'A personal finance app that shows you exactly where your money goes — no spreadsheets, no discipline required.',
    oneLineImpact:
      'A pre-launch landing page that turns money anxiety into curiosity — and visitors into a qualified early-access waitlist.',
    coverImage: '/images/projects/dana/cover.jpg',
    coverImageDark: '/images/projects/dana/cover-dark.jpg',
    featured: true,
    year: 2026,
    client: 'Dana',
    liveUrl: 'https://www.danaapp.tech/',
    role: 'Design & Development',
    duration: '3 weeks',
    services: ['UI / UX', 'Frontend', 'Brand'],
    overview:
      'Dana is a personal finance app launching to help people see where their money actually goes — visually, in seconds. The pre-launch site has one job: convert the right people onto an early-access waitlist before the product ships.',
    problem:
      'Most personal finance pages either drown visitors in features or guilt-trip them with "build better habits" copy. Dana needed a pre-launch site that felt confident and modern, made the insight feel emotional (not technical), and captured high-intent signups without a working product to demo.',
    solution:
      'A single-screen, editorial hero leads with a sharp reframe — "Most people are not bad with money. They\'re just blind to it." — and pairs it with one promise (clarity in 10 seconds) and one action (join the waitlist). A pre-launch badge, scarcity cue ("limited spots"), and inline name + email capture remove every step between curiosity and commitment.',
    features: [
      {
        title: 'Editorial reframe hero',
        description:
          'A bold serif headline reframes the problem from "you\'re bad with money" to "you just can\'t see it" — emotional, not preachy.',
      },
      {
        title: 'Single conversion path',
        description:
          'Name + email inline on the hero, with one "Get clarity" CTA — no scroll required to convert.',
      },
      {
        title: 'Pre-launch trust signals',
        description:
          '"Pre-launch · Early access opening soon" badge plus a scarcity line ("limited spots") frame the waitlist as wanted, not begged for.',
      },
      {
        title: 'Light + dark, no compromise',
        description:
          'A coral accent against neutral surfaces holds its weight in both themes — premium without feeling fintech-corporate.',
      },
    ],
    screenshots: [],
    outcome:
      'A pre-launch front door that lets a finance product build a qualified waitlist on the strength of one promise — clarity in 10 seconds — before a single feature ships.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    slug: 'zayden-lux',
    name: 'Zayden Lux',
    category: 'business-website',
    tagline:
      'A serene, trust-led website for a private online hypnotherapy practice.',
    oneLineImpact:
      'A calm, conversion-focused front door that turns hesitant visitors into booked consultations.',
    coverImage: '/images/projects/zayden-lux/cover.jpg',
    coverImageDark: '/images/projects/zayden-lux/cover-dark.jpg',
    featured: true,
    year: 2026,
    client: 'Zayden Lux',
    liveUrl: 'https://zayden-lux.pages.dev/',
    role: 'Design & Development',
    duration: '4 weeks',
    services: ['UI / UX', 'Frontend', 'Brand'],
    overview:
      'Zayden Lux is a private online hypnotherapy and mind-reset coaching practice. The website is the front door — designed to feel safe, calming, and human enough that visitors feel comfortable booking a free consultation.',
    problem:
      'Online therapy sites usually swing between two extremes: too clinical and cold, or too template-wellness and busy. Zayden needed a presence that felt premium, calm, and trustworthy from the first scroll — and that converted hesitant visitors into booked consultations without feeling sales-y.',
    solution:
      'A serif-led, soft-gradient homepage that leads with a single emotional promise, backed by three quiet trust signals (100% confidential, 1,200+ mindful sessions, trauma-informed) and one clear CTA. Subdued lavender palette, generous whitespace, and an ambient calm-sound toggle reinforce the brand promise rather than competing with it.',
    features: [
      {
        title: 'Emotion-led hero',
        description:
          'A single promise — "Reset your mind. Heal your heart." — does the heavy lifting, no overload.',
      },
      {
        title: 'Quiet trust signals',
        description:
          'Confidentiality, session count, and methodology surfaced inline — built-in reassurance without testimonials chrome.',
      },
      {
        title: 'Single conversion path',
        description:
          '"Book Free Consultation" is the only primary action on every section — no decision fatigue.',
      },
      {
        title: 'Ambient calm-sound toggle',
        description:
          'Subtle optional background audio that lets visitors feel the brand tone, not just read it.',
      },
    ],
    // TODO: capture screenshots via scripts/screenshot.mjs and add
    //   `{ src: '/images/projects/<slug>/<n>.jpg', alt: '...', caption: '...' }`
    //   entries here. Gallery renders alternating full-bleed + contained when populated.
    screenshots: [],
    outcome:
      'A trust-first front door that helps a private practice scale from word-of-mouth to qualified inbound consultations — without sacrificing the calm tone that defines the service.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    slug: 'msme',
    name: 'MSME',
    category: 'business-website',
    tagline:
      "Discover Myanmar's digital marketplace — built to help small businesses sell online.",
    oneLineImpact:
      'A modern marketplace experience that helps Myanmar small businesses reach more buyers online.',
    coverImage: '/images/projects/msme/cover.jpg',
    coverImageDark: '/images/projects/msme/cover-dark.jpg',
    featured: true,
    year: 2026,
    client: 'G3G',
    liveUrl: 'https://msmebyg3g.com/',
    role: 'Design & Development',
    duration: '6 weeks',
    services: ['UI / UX', 'Frontend', 'Brand'],
    overview:
      'MSME is a mobile-first digital marketplace that connects Myanmar small businesses with buyers across the country. The product website tells the story of the platform and drives app downloads from both iOS and Android.',
    problem:
      'Local SMEs in Myanmar struggled to reach buyers online. The previous web presence did not communicate the value of the marketplace clearly and made it hard for new merchants and shoppers to understand why they should join.',
    solution:
      'A clean, content-first product website with a strong hero, a clear story flow (what it is → how it works → benefits), and direct App Store and Google Play download paths. Designed mobile-first to match the audience.',
    features: [
      {
        title: 'Clear product story',
        description:
          'A guided flow that explains what the marketplace is and how it works in under a minute.',
      },
      {
        title: 'Mobile-first design',
        description:
          'Optimised for the device most Myanmar buyers actually use to browse and shop.',
      },
      {
        title: 'Direct download CTAs',
        description:
          'Every section funnels into App Store and Google Play download buttons.',
      },
      {
        title: 'Best-sellers showcase',
        description:
          'Featured products surfaced on the homepage to build immediate trust and intent.',
      },
    ],
    // TODO: capture screenshots via scripts/screenshot.mjs and add
    //   `{ src: '/images/projects/<slug>/<n>.jpg', alt: '...', caption: '...' }`
    //   entries here. Gallery renders alternating full-bleed + contained when populated.
    screenshots: [],
    outcome:
      'A premium digital storefront that finally matches the ambition of the marketplace — giving merchants and shoppers a single, trustworthy place to discover the platform and download the app.',
    metrics: [
      { label: 'Faster path to download', value: '2 clicks' },
      { label: 'Mobile-first', value: '100%' },
      { label: 'Live in', value: '6 wks' },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
]
