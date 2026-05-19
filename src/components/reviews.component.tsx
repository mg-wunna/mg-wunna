import { Quote } from 'lucide-react'

import { REVIEWS } from '@/constants/reviews'

export function Reviews() {
  return (
    <section className="border-t border-border bg-muted-surface py-xl">
      <div className="mx-auto max-w-8xl px-margin">
        <div className="max-w-2xl">
          <p className="eyebrow">Client words</p>
          <h2 className="mt-2 text-balance font-display text-headline-md font-medium text-on-surface">
            What founders say about working with me.
          </h2>
        </div>

        <div className="mt-lg grid grid-cols-1 gap-gutter md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.author}
              className="flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-md"
            >
              <div>
                <Quote
                  className="h-5 w-5 text-secondary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <blockquote className="mt-md text-body-lg text-on-surface">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-md border-t border-border pt-md">
                <p className="text-body-md font-medium text-on-surface">
                  {review.author}
                </p>
                <p className="text-body-sm text-secondary">{review.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
