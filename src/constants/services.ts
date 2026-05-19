import { type Service } from '@/types/service.type'

export const SERVICES: Service[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    summary:
      'Premium product and company websites that build trust and convert.',
    description:
      'Most business sites are either too generic to feel premium or too custom to ship on time. I build modern, high-converting websites that communicate your value clearly, look credible in the first three seconds, and turn first-time visitors into qualified leads — without a six-month timeline.',
    deliverables: [
      'Custom design tailored to your brand (no templates)',
      'Responsive on every device, optimised for mobile first',
      'SEO-ready foundation: metadata, sitemap, structured data',
      '90+ Lighthouse score (performance, accessibility, SEO)',
      'Headless CMS so non-technical teammates can update copy',
      'Analytics + lead-form pipeline wired in from day one',
    ],
    idealFor: [
      'Small and medium businesses',
      'Service companies',
      'Personal brands and creators',
    ],
    timeline: '3–6 weeks',
    example:
      'A 6-page company site: hero, services, work, about, blog, contact. Connected to a CMS, lead form posts to your inbox + CRM, with a custom design system that scales to future pages.',
    icon: 'globe',
  },
  {
    id: 'website-redesigns',
    title: 'Website Redesigns',
    summary: 'Modernize outdated sites with refined UX and visual identity.',
    description:
      "Your business has grown but the website hasn't kept up. Conversion is leaking, the design feels two years behind, and editing anything is painful. I rebuild from the ground up — keeping what works, fixing what doesn't, and migrating without dropping your SEO.",
    deliverables: [
      'Audit of current site: conversion gaps, UX issues, tech debt',
      'Refreshed visual identity and a reusable design system',
      'Information architecture rework (sitemap, navigation)',
      '301 redirect plan so existing rankings stay intact',
      'New CMS setup (or migration from old platform)',
      'Hand-off documentation + 2 weeks of post-launch support',
    ],
    idealFor: [
      'Established businesses with dated sites',
      'Companies after a brand refresh',
      'Teams losing leads to a confusing site',
    ],
    timeline: '4–6 weeks',
    example:
      'A SaaS company with a 2019 WordPress site converting at 0.6%. New design system, faster load, clearer messaging, migrated to a modern stack — same content, half the bounce rate.',
    icon: 'refresh',
  },
  {
    id: 'web-systems',
    title: 'Web Systems',
    summary: 'Dashboards, admin tools, and internal systems that scale.',
    description:
      'When your team outgrows spreadsheets and off-the-shelf tools, you need a system built for how you actually work. I design and build production-grade dashboards and internal tools — real authentication, real data, and an interface your team will actually use.',
    deliverables: [
      'Custom dashboard and admin UI tailored to your workflows',
      'Role-based access control and SSO-ready auth',
      'API integrations (Stripe, internal services, third-party data)',
      'Background jobs, queues, and scheduled tasks',
      'Clean component architecture you can extend yourself',
      'Deployment, monitoring, and ops handover',
    ],
    idealFor: [
      'Growing companies outgrowing spreadsheets',
      'Teams that need a custom admin panel',
      'Products with operational complexity',
    ],
    timeline: '6–10 weeks',
    example:
      'An internal ops dashboard for a logistics team: live order tracking, role-based access for 15 staff, integrations with two existing APIs, and a clean component library so future modules ship in days, not weeks.',
    icon: 'layout-dashboard',
  },
  {
    id: 'mvp-development',
    title: 'MVP Development',
    summary: 'Startup-ready product builds from idea to launch.',
    description:
      "Most MVPs fail because they're built too big, too slow, or with the wrong scope. I work with founders to ship a deployed product to the first paying users — with the right stack, the right scope, and the right pace. No over-engineering, no missing essentials.",
    deliverables: [
      'Scope definition and 4–8 week MVP roadmap',
      'Product design: user flows, wireframes, visual design',
      'Full-stack build: frontend, API, database, infra',
      'Auth, payments (Stripe), and analytics wired in',
      'Production deployment + monitoring',
      'Hand-off + 30 days of bug-fix support',
    ],
    idealFor: [
      'Solo founders validating an idea',
      'Funded startups racing to launch',
      'Domain experts without a technical co-founder',
    ],
    timeline: '4–8 weeks',
    example:
      'A B2B SaaS MVP for a niche industry tool: 4 core flows, Stripe checkout, email auth, deployed on Vercel + a managed database, and live with the first 10 beta users in under 6 weeks.',
    icon: 'rocket',
  },
]

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((service) => service.id === id)
}
