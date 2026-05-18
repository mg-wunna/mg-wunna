import { type Service } from '@/types/service.type'

export const SERVICES: Service[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    summary:
      'Premium product and company websites that build trust and convert.',
    description:
      'Modern, high-converting websites for small businesses and established brands. Designed to communicate clear value, build credibility in seconds, and turn visitors into customers.',
    deliverables: [
      'Custom design tailored to your brand',
      'Responsive on every device',
      'SEO-ready foundation',
      'Performance-tuned (90+ Lighthouse)',
      'Content management you can update yourself',
    ],
    idealFor: [
      'Small and medium businesses',
      'Service companies',
      'Personal brands and creators',
    ],
    icon: 'globe',
  },
  {
    id: 'website-redesigns',
    title: 'Website Redesigns',
    summary: 'Modernize outdated sites with refined UX and visual identity.',
    description:
      'A fresh look and feel for sites that no longer reflect where your business is today. Focused on modern UX, faster load times, and a design system that scales with you.',
    deliverables: [
      'Audit of current site and conversion gaps',
      'Refreshed visual identity and design system',
      'Improved information architecture',
      'Migration plan with no SEO drop',
      'Hand-off documentation',
    ],
    idealFor: [
      'Established businesses with dated sites',
      'Companies after a brand refresh',
      'Teams losing leads to a confusing site',
    ],
    icon: 'refresh',
  },
  {
    id: 'web-systems',
    title: 'Web Systems',
    summary: 'Dashboards, admin tools, and internal systems that scale.',
    description:
      'Production-grade internal tools, dashboards, and admin panels. Built to handle real-world data and grow with the team that depends on them.',
    deliverables: [
      'Custom dashboards and admin UIs',
      'Role-based access and auth',
      'API integrations and data pipelines',
      'Clean component architecture',
      'Deployment and ops handover',
    ],
    idealFor: [
      'Growing companies outgrowing spreadsheets',
      'Teams that need a custom admin panel',
      'Products with operational complexity',
    ],
    icon: 'layout-dashboard',
  },
  {
    id: 'mvp-development',
    title: 'MVP Development',
    summary: 'Startup-ready product builds from idea to launch.',
    description:
      'From the first wireframe to a deployed product. Built with the right scope, the right stack, and the right pace to get to your first paying users without over-engineering.',
    deliverables: [
      'Scope definition and MVP roadmap',
      'Product design and user flows',
      'Full-stack build (web + API + database)',
      'Auth, payments, and analytics wired in',
      'Production deployment',
    ],
    idealFor: [
      'Solo founders validating an idea',
      'Funded startups racing to launch',
      'Domain experts without a technical co-founder',
    ],
    icon: 'rocket',
  },
]

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((service) => service.id === id)
}
