import clsx from 'clsx'

interface CaseStudySectionProps {
  eyebrow: string
  title: string
  children: React.ReactNode
  className?: string
}

export function CaseStudySection({
  eyebrow,
  title,
  children,
  className,
}: CaseStudySectionProps) {
  return (
    <section className={clsx('mt-16 sm:mt-24', className)}>
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        {title}
      </h2>
      <div className="mt-6 space-y-6 text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
        {children}
      </div>
    </section>
  )
}
