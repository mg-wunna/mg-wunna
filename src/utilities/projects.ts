import { PROJECTS } from '@/constants/projects'
import {
  PROJECT_CATEGORY_LABELS,
  type Project,
  type ProjectCategory,
} from '@/types/project.type'

export function getAllProjects(): Project[] {
  return [...PROJECTS].sort((a, b) => b.year - a.year)
}

export function getFeaturedProjects(limit?: number): Project[] {
  const featured = getAllProjects().filter((project) => project.featured)
  return typeof limit === 'number' ? featured.slice(0, limit) : featured
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}

export function getProjectsByCategory(
  category: ProjectCategory | 'all',
): Project[] {
  if (category === 'all') return getAllProjects()
  return getAllProjects().filter((project) => project.category === category)
}

export function getCategoryLabel(category: ProjectCategory): string {
  return PROJECT_CATEGORY_LABELS[category]
}

export function getNextProject(slug: string): Project | undefined {
  const project = getProjectBySlug(slug)
  if (project?.nextSlug) {
    const explicit = getProjectBySlug(project.nextSlug)
    if (explicit) return explicit
  }

  const all = getAllProjects()
  const index = all.findIndex((p) => p.slug === slug)
  if (index === -1) return undefined
  return all[(index + 1) % all.length]
}
