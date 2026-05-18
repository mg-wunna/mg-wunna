import { type ProcessStep } from '@/types/process.type'

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery',
    description:
      'We start with a focused conversation about your business, your customers, and what success looks like. Scope and goals are written down before anything else.',
  },
  {
    step: 2,
    title: 'UI / UX Planning',
    description:
      'Sitemap, user flows, and wireframes. We agree on structure and decisions on paper before committing to visuals.',
  },
  {
    step: 3,
    title: 'Design & Development',
    description:
      'Visual design and engineering happen in tight loops. You see progress weekly and steer direction continuously.',
  },
  {
    step: 4,
    title: 'Testing & Optimization',
    description:
      'Performance, accessibility, content, and cross-device review. We polish until the site feels right.',
  },
  {
    step: 5,
    title: 'Launch & Support',
    description:
      'Production launch, analytics, and an aftercare window so you are never left alone with a live site.',
  },
]
