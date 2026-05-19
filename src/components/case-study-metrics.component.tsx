import { type ProjectMetric } from '@/types/project.type'

interface CaseStudyMetricsProps {
  metrics: ProjectMetric[]
}

export function CaseStudyMetrics({ metrics }: CaseStudyMetricsProps) {
  if (!metrics || metrics.length === 0) return null

  return (
    <section className="bg-muted-surface py-lg">
      <div className="mx-auto max-w-8xl px-margin">
        <p className="eyebrow">By the numbers</p>
        <div className="mt-md grid grid-cols-1 gap-gutter sm:grid-cols-3">
          {metrics.slice(0, 3).map((metric) => (
            <div key={metric.label} className="card">
              <p className="font-display text-headline-sm font-medium text-on-surface">
                {metric.value}
              </p>
              <p className="mt-2 text-body-sm text-secondary">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
