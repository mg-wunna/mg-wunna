'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="bg-background py-xl">
      <div className="mx-auto flex max-w-editorial flex-col items-start gap-md px-margin">
        <p className="eyebrow">Something broke</p>
        <h1 className="text-balance font-display text-headline-md font-medium text-on-surface sm:text-headline-lg">
          That page did not load.
        </h1>
        <p className="max-w-prose text-body-lg text-secondary">
          Sorry about that. The error has been logged. Try reloading — or head
          back home and reach out if it keeps happening.
        </p>
        <div className="mt-md flex flex-wrap items-center gap-3">
          <button type="button" onClick={reset} className="btn-primary">
            Try again
          </button>
          <Link href="/" className="btn-tertiary">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
