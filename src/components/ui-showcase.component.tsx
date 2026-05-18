import Image from 'next/image'

import { type ProjectScreenshot } from '@/types/project.type'

interface UiShowcaseProps {
  screenshots: ProjectScreenshot[]
}

export function UiShowcase({ screenshots }: UiShowcaseProps) {
  if (screenshots.length === 0) return null

  return (
    <div className="space-y-10">
      {screenshots.map((screenshot, idx) => (
        <figure key={`${screenshot.src}-${idx}`}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </div>
          {screenshot.caption ? (
            <figcaption className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
              {screenshot.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  )
}
