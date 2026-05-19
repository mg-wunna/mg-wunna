import { type Project } from '@/types/project.type'

interface CaseStudyMetaProps {
  project: Project
}

interface MetaItem {
  label: string
  value: React.ReactNode
}

export function CaseStudyMeta({ project }: CaseStudyMetaProps) {
  const items: MetaItem[] = []

  if (project.client) items.push({ label: 'Client', value: project.client })
  items.push({ label: 'Year', value: project.year })
  if (project.role) items.push({ label: 'Role', value: project.role })
  if (project.duration) {
    items.push({ label: 'Duration', value: project.duration })
  }
  if (project.services && project.services.length > 0) {
    items.push({ label: 'Services', value: project.services.join(', ') })
  }
  if (project.techStack && project.techStack.length > 0) {
    items.push({ label: 'Stack', value: project.techStack.join(', ') })
  }

  if (items.length === 0) return null

  return (
    <section className="bg-background py-lg">
      <div className="mx-auto max-w-8xl px-margin">
        <dl className="grid grid-cols-2 gap-x-gutter gap-y-md border-y border-border py-md sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <div key={item.label}>
              <dt className="eyebrow">{item.label}</dt>
              <dd className="mt-2 text-body-sm text-on-surface">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
