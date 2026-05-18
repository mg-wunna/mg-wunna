export type ProjectType =
  | 'business-website'
  | 'website-redesign'
  | 'saas-mvp'
  | 'dashboard'
  | 'other'

export type Budget = '<500' | '500-2k' | '2k-5k' | '5k+'

export type Goal =
  | 'more-customers'
  | 'brand-image'
  | 'automation'
  | 'launch-startup'
  | 'other'

export type Timeline = 'asap' | '1-2-weeks' | '1-month' | 'flexible'

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'won' | 'lost'

export interface LeadInput {
  name: string
  email: string
  company?: string
  projectType: ProjectType
  budget: Budget
  description: string
  goals: Goal[]
  timeline: Timeline
}

export const PROJECT_TYPE_OPTIONS: { value: ProjectType; label: string }[] = [
  { value: 'business-website', label: 'Business Website' },
  { value: 'website-redesign', label: 'Website Redesign' },
  { value: 'saas-mvp', label: 'SaaS / Startup MVP' },
  { value: 'dashboard', label: 'Dashboard / System' },
  { value: 'other', label: 'Other' },
]

export const BUDGET_OPTIONS: { value: Budget; label: string }[] = [
  { value: '<500', label: 'Under $500' },
  { value: '500-2k', label: '$500 – $2,000' },
  { value: '2k-5k', label: '$2,000 – $5,000' },
  { value: '5k+', label: '$5,000+' },
]

export const GOAL_OPTIONS: { value: Goal; label: string }[] = [
  { value: 'more-customers', label: 'Get more customers' },
  { value: 'brand-image', label: 'Improve brand image' },
  { value: 'automation', label: 'Automate business processes' },
  { value: 'launch-startup', label: 'Launch a startup idea' },
  { value: 'other', label: 'Other' },
]

export const TIMELINE_OPTIONS: { value: Timeline; label: string }[] = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-2-weeks', label: '1 – 2 weeks' },
  { value: '1-month', label: 'Around 1 month' },
  { value: 'flexible', label: 'Flexible' },
]
