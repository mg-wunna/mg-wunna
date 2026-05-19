import { type HostingPlan, type ServerTier } from '@/types/pricing.type'

export const BUILD_FEE_INCLUDES = [
  'Discovery and scope alignment',
  'Custom design system tailored to your brand',
  'Production-grade code, mobile-first',
  'SEO foundation and analytics wired in',
  'Deployment, handover and 30 days of post-launch support',
]

export const BUILD_SCOPE_FACTORS = [
  'Number of pages and unique templates',
  'Custom features vs off-the-shelf components',
  'Third-party integrations (payments, CRM, CMS)',
  'Design complexity and brand work',
  'Timeline and number of stakeholders',
]

export const MAINTENANCE_INCLUDES = [
  'Security patches for OS and dependencies',
  'Framework and library updates kept current',
  'Daily backups, monthly restore tests',
  'Uptime monitoring with on-call response',
  'Minor content edits each month',
  'Bug fixes for anything caused by updates',
]

export const SERVER_TIERS: ServerTier[] = [
  {
    size: 'xs',
    label: 'XS',
    monthlyUsd: 10,
    capacity: '~5k monthly visitors',
    bestFor: 'Small marketing site with a few forms',
    includedBandwidthGb: 50,
  },
  {
    size: 's',
    label: 'S',
    monthlyUsd: 20,
    capacity: '~15k monthly visitors',
    bestFor: 'Busier business site, light dashboard',
    includedBandwidthGb: 100,
  },
  {
    size: 'm',
    label: 'M',
    monthlyUsd: 40,
    capacity: '~50k monthly visitors',
    bestFor: 'Sites with accounts or a small product',
    includedBandwidthGb: 250,
  },
  {
    size: 'l',
    label: 'L',
    monthlyUsd: 80,
    capacity: '~150k monthly visitors',
    bestFor: 'Growing product, regular traffic spikes',
    includedBandwidthGb: 500,
  },
  {
    size: 'xl',
    label: 'XL',
    monthlyUsd: 160,
    capacity: '~400k monthly visitors',
    bestFor: 'Established product, steady high traffic',
    includedBandwidthGb: 1000,
  },
]

export const BANDWIDTH_OVERAGE_PER_GB_USD = 1

export const HOSTING_PLANS: HostingPlan[] = [
  {
    id: 'small',
    name: 'Small Business',
    tagline: 'For brochure sites that need to feel premium.',
    priceLabel: '$99',
    priceSuffix: '/ year',
    pitch:
      'Your site is a brochure — fast, secure, no maintenance to think about.',
    whyChoose:
      'Best if your site does not collect accounts, payments or anything dynamic. You get the polish without the running cost.',
    includes: [
      'Global CDN — fast everywhere',
      'SSL and custom domain',
      'Automatic deploys when content changes',
      'Daily uptime checks',
      'Email support within 24 hours',
    ],
    ctaLabel: 'Start a project',
    ctaHref: '/contact',
  },
  {
    id: 'medium',
    name: 'Medium Business',
    tagline: 'For sites that actually do something.',
    priceLabel: 'from $10',
    priceSuffix: '/ month',
    pitch:
      'Your site does something — forms, accounts, a small product behind it.',
    whyChoose:
      'Best if you collect leads, run a small product, or need a real database. Pick a server size below — upgrade any time as traffic grows.',
    includes: [
      'Managed dedicated server (you do not run it)',
      'Daily off-site backups',
      'Uptime and error monitoring',
      'SSL, custom domain, staging environment',
      '24-hour support response',
    ],
    serverTierIds: ['xs', 's', 'm', 'l', 'xl'],
    minServers: 1,
    highlight: true,
    ctaLabel: 'Start a project',
    ctaHref: '/contact',
  },
  {
    id: 'large',
    name: 'Large Business',
    tagline: 'For businesses where uptime is revenue.',
    priceLabel: 'from $120',
    priceSuffix: '/ month',
    pitch:
      'Traffic spikes are real, and downtime costs real money. Built to keep your site online when it matters most.',
    whyChoose:
      'Best if downtime would cost you customers — e-commerce, SaaS, high-traffic content. Or if your team needs an SLA on paper.',
    includes: [
      'Auto-scaling cluster of 3+ servers, always on',
      '99.99% uptime SLA',
      'Advanced monitoring with on-call response',
      'Custom integrations and security review',
      'Self-host option: Docker image with license',
    ],
    serverTierIds: ['m', 'l', 'xl'],
    minServers: 3,
    ctaLabel: 'Talk to me',
    ctaHref: '/contact',
  },
]

export const PRICING_FAQ: { question: string; answer: string }[] = [
  {
    question: 'Why is the build fee not a fixed number on this page?',
    answer:
      'Because no two projects are the same. A five-page brochure site and a thirty-page product site with three integrations live in completely different worlds. I scope each project and quote a single fixed fee before any work starts, so you know the number up front — but the number is yours, not a generic price tag.',
  },
  {
    question: 'What is the difference between maintenance and a new feature?',
    answer:
      'Maintenance is keep-it-running work — security patches, library updates, monitoring, small content tweaks. A new feature is anything that changes what the site does — a new page, a payment integration, a member area. Maintenance is bundled into your monthly fee. New features are scoped and quoted separately, same way as the initial build.',
  },
  {
    question: 'Can I host the site myself instead?',
    answer:
      'Yes. You own the code. I will hand over a clean repo and deployment guide so your team or another developer can take it from there. The hosting plans exist because most clients prefer not to think about it.',
  },
  {
    question: 'What happens if my traffic grows past the plan?',
    answer:
      'On Medium, you move up a server size — same code, same database, just bigger box. On Large, the cluster auto-scales so you do not have to think about it. There is no penalty for upgrading or downgrading.',
  },
  {
    question: 'Can I pay the build fee in instalments?',
    answer:
      'Yes. Most projects are split into milestone payments — typically a deposit to start, a stage payment at design sign-off, and the balance at launch. We agree the exact split during scoping.',
  },
  {
    question: 'What is the Docker / self-host option on Large?',
    answer:
      'A licensed Docker image you can run on your own Kubernetes or VPS fleet. Useful if you have an internal platform team or strict data-residency requirements. We agree on the license terms up front.',
  },
]
