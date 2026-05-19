import Image from 'next/image'

import { type ProjectScreenshot } from '@/types/project.type'

interface CaseStudyGalleryProps {
  screenshots: ProjectScreenshot[]
}

export function CaseStudyGallery({ screenshots }: CaseStudyGalleryProps) {
  if (!screenshots || screenshots.length === 0) return null

  return (
    <section className="bg-background py-lg">
      <div className="mx-auto max-w-8xl px-margin">
        <p className="eyebrow">Selected screens</p>
        <h2 className="mt-2 font-display text-headline-sm font-medium text-on-surface">
          Inside the build.
        </h2>

        <div className="mt-lg space-y-lg">
          {screenshots.map((screenshot, idx) => {
            const isFull = idx % 2 === 0
            return (
              <figure
                key={`${screenshot.src}-${idx}`}
                className={isFull ? '' : 'mx-auto max-w-5xl'}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted-surface">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    sizes={
                      isFull
                        ? '(min-width: 1440px) 1408px, 100vw'
                        : '(min-width: 1024px) 1024px, 100vw'
                    }
                    className="object-cover"
                  />
                </div>
                {screenshot.caption ? (
                  <figcaption className="mt-3 text-caption text-secondary">
                    {screenshot.caption}
                  </figcaption>
                ) : null}
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
