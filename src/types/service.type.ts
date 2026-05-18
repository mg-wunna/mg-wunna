export type ServiceIcon = 'globe' | 'refresh' | 'layout-dashboard' | 'rocket'

export interface Service {
  id: string
  title: string
  summary: string
  description: string
  deliverables: string[]
  idealFor: string[]
  startingPrice?: string
  icon: ServiceIcon
}
