import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-zinc-900 font-semibold text-white hover:bg-zinc-800 active:bg-zinc-900 active:text-white/80 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 dark:active:bg-white dark:active:text-zinc-900/80',
  brand:
    'bg-brand font-semibold text-brand-fg hover:bg-brand-hover active:bg-brand active:text-brand-fg/80',
  secondary:
    'border border-zinc-300 bg-white font-medium text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50 active:bg-zinc-50 active:text-zinc-900/70 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:active:text-zinc-200/70',
  ghost:
    'font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white',
}

const sizeStyles = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
  size?: keyof typeof sizeStyles
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
)

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center justify-center gap-2 rounded-lg outline-offset-2 transition duration-220 ease-enter focus-visible:outline-2 focus-visible:outline-brand active:transition-none motion-reduce:transition-none',
    variantStyles[variant],
    sizeStyles[size],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
