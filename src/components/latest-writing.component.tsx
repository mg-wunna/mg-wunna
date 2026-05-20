import Link from 'next/link'

import { BlogPostCard } from '@/components/blog-post-card.component'
import {
  Reveal,
  RevealItem,
  RevealStagger,
} from '@/components/reveal.component'
import { getAllPosts } from '@/utilities/blog'

export function LatestWriting() {
  const posts = getAllPosts().slice(0, 3)
  if (posts.length === 0) return null

  return (
    <section className="bg-background py-xl">
      <div className="mx-auto max-w-8xl px-margin">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="max-w-2xl">
              <p className="eyebrow">Insights</p>
              <h2 className="mt-2 font-display text-headline-md font-medium text-on-surface">
                Notes on building for the web.
              </h2>
            </div>
            <Link href="/blogs" className="btn-tertiary">
              View all →
            </Link>
          </div>
        </Reveal>

        <RevealStagger className="mt-lg grid grid-cols-1 gap-x-gutter gap-y-lg sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.slug}>
              <BlogPostCard post={post} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
