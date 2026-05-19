import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-background py-xl text-center">
      <div className="mx-auto max-w-editorial px-margin">
        <p className="eyebrow">404</p>
        <h1 className="mt-md font-display text-headline-md font-medium text-on-surface sm:text-headline-lg">
          Page not found.
        </h1>
        <p className="mx-auto mt-md max-w-prose text-body-lg text-secondary">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="mt-md">
          <Link href="/" className="btn-primary">
            Go back home
          </Link>
        </div>
      </div>
    </section>
  )
}
