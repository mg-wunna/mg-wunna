import { type Project } from '@/types/project.type'

// Placeholder data. Replace each entry with real project info, then
// drop screenshots into /src/images/projects/<slug>/ and update the
// coverImage + screenshots paths to absolute URLs (placehold.co is
// allowed in next.config.mjs for now).
export const PROJECTS: Project[] = [
  {
    slug: 'msme',
    name: 'MSME',
    category: 'business-website',
    tagline: 'Empowering small businesses to reach more customers online.',
    oneLineImpact:
      'A modern presence that helps MSMEs build trust and grow their reach.',
    coverImage: 'https://placehold.co/1200x800/0a0a0a/ffffff.png?text=MSME',
    featured: true,
    year: 2024,
    overview:
      'A business website for an MSME-focused initiative — designed to communicate value clearly and convert visitors into qualified inquiries.',
    problem:
      'The previous web presence did not reflect the maturity of the organization and made it hard for prospects to understand what was offered.',
    solution:
      'A redesign with a clear narrative, refreshed visual identity, and conversion-focused information architecture.',
    features: [
      {
        title: 'Modern responsive design',
        description: 'A clean, premium layout that works on every device.',
      },
      {
        title: 'Clear value communication',
        description:
          'Messaging that helps visitors understand the offering in under ten seconds.',
      },
      {
        title: 'Conversion-focused flow',
        description:
          'Every section guides the visitor toward a clear next step.',
      },
    ],
    screenshots: [
      {
        src: 'https://placehold.co/1600x1000/0a0a0a/ffffff.png?text=MSME+Home',
        alt: 'MSME home page',
      },
      {
        src: 'https://placehold.co/1600x1000/0a0a0a/ffffff.png?text=MSME+Features',
        alt: 'MSME features section',
      },
    ],
    outcome:
      'A premium digital presence that elevates the brand and gives the team a foundation to grow on.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    slug: 'tr-judy',
    name: 'TR Judy',
    category: 'business-website',
    tagline: 'A premium brand site for a modern service business.',
    oneLineImpact:
      'A premium product showcase designed to increase brand trust and conversion.',
    coverImage: 'https://placehold.co/1200x800/111111/ffffff.png?text=TR+Judy',
    featured: true,
    year: 2024,
    overview:
      'A business website for TR Judy, focused on showcasing the brand with a premium feel and a strong call to action.',
    problem:
      'The brand needed an online presence that matched the quality of its offline experience.',
    solution:
      'A clean, content-first website with refined typography and a clear contact path.',
    features: [
      {
        title: 'Editorial layout',
        description: 'Spacious typography and full-bleed imagery.',
      },
      {
        title: 'Clear contact CTA',
        description: 'Every page funnels into a single primary action.',
      },
    ],
    screenshots: [
      {
        src: 'https://placehold.co/1600x1000/111111/ffffff.png?text=TR+Judy+Home',
        alt: 'TR Judy home page',
      },
    ],
    outcome:
      'A digital presence that finally matches the quality of the brand offline.',
    techStack: ['Next.js', 'Tailwind CSS'],
  },
]
