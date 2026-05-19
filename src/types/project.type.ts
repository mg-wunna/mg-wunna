export type ProjectCategory =
  | 'business-website'
  | 'saas-mvp'
  | 'dashboard'
  | 'branding'

export interface ProjectFeature {
  title: string
  description: string
}

export interface ProjectScreenshot {
  src: string
  alt: string
  caption?: string
}

export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  slug: string
  name: string
  category: ProjectCategory
  tagline: string
  oneLineImpact: string
  coverImage: string
  coverImageDark?: string
  featured: boolean
  year: number
  client?: string
  liveUrl?: string
  overview: string
  problem: string
  solution: string
  features: ProjectFeature[]
  screenshots: ProjectScreenshot[]
  outcome: string
  techStack?: string[]
  role?: string
  duration?: string
  services?: string[]
  heroImage?: string
  metrics?: ProjectMetric[]
  nextSlug?: string
}

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  'business-website': 'Business Website',
  'saas-mvp': 'SaaS / MVP',
  dashboard: 'Dashboard',
  branding: 'Branding',
}
