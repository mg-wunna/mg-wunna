import { Container } from '@/components/container.component'
import { SectionHeading } from '@/components/section-heading.component'
import { ServiceCard } from '@/components/service-card.component'
import { SERVICES } from '@/constants/services'

export function ServicesPreview() {
  return (
    <Container className="mt-24 sm:mt-32">
      <SectionHeading
        eyebrow="Services"
        title="What I can build for your business."
        description="Focused on the work that moves the needle for small businesses, startup founders, and creators."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Container>
  )
}
