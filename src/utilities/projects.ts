import { PROJECTS } from '@/constants/projects'
import {
  PROJECT_CATEGORY_LABELS,
  type Project,
  type ProjectCategory,
} from '@/types/project.type'

export function getAllProjects(): Project[] {
  return [...PROJECTS].sort((a, b) => b.year - a.year)
}

export function getFeaturedProjects(limit = 4): Project[] {
  return getAllProjects()
    .filter((project) => project.featured)
    .slice(0, limit)
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
