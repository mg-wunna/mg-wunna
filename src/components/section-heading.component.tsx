import clsx from 'clsx'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={clsx(
          'mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  )
}
