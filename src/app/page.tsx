import { CtaSection } from '@/components/cta-section.component'
import { FeaturedWork } from '@/components/featured-work.component'
import { Hero } from '@/components/hero.component'
import { LatestWriting } from '@/components/latest-writing.component'
import { Process } from '@/components/process.component'
import { Reviews } from '@/components/reviews.component'
import { ServicesPreview } from '@/components/services-preview.component'
import { TrustStrip } from '@/components/trust-strip.component'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedWork />
      <ServicesPreview />
      <Process />
      <Reviews />
      <LatestWriting />
      <CtaSection />
    </>
  )
}
