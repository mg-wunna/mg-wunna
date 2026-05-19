export type ServerSize = 'xs' | 's' | 'm' | 'l' | 'xl'

export interface ServerTier {
  size: ServerSize
  label: string
  monthlyUsd: number
  capacity: string
  bestFor: string
  includedBandwidthGb: number
}

export type HostingPlanId = 'small' | 'medium' | 'large'

export interface HostingPlan {
  id: HostingPlanId
  name: string
  tagline: string
  priceLabel: string
  priceSuffix: string
  pitch: string
  whyChoose: string
  includes: string[]
  serverTierIds?: ServerSize[]
  minServers?: number
  highlight?: boolean
  ctaLabel: string
  ctaHref: string
}
