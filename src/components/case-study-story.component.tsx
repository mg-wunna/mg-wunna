import clsx from 'clsx'

interface CaseStudyStoryProps {
  eyebrow: string
  title: string
  children: React.ReactNode
  surface?: 'background' | 'muted'
  className?: string
}

export function CaseStudyStory({
  eyebrow,
  title,
  children,
  surface = 'background',
  className,
}: CaseStudyStoryProps) {
  const surfaceClass =
    surface === 'muted' ? 'bg-muted-surface' : 'bg-background'

  return (
    <section className={clsx('py-lg', surfaceClass, className)}>
      <div className="mx-auto max-w-8xl px-margin">
        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-2 font-display text-headline-sm font-medium text-on-surface">
              {title}
            </h2>
          </div>
          <div className="space-y-md text-body-lg text-secondary lg:col-span-8 lg:pt-7">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
