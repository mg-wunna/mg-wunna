import { type Metadata } from 'next'

import { BlogPostCard } from '@/components/blog-post-card.component'
import { CtaSection } from '@/components/cta-section.component'
import { Reveal } from '@/components/reveal.component'
import { getAllPosts } from '@/utilities/blog'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Notes on building modern websites and scalable systems — written for the people commissioning them, not the people coding them.',
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="bg-background pb-lg pt-lg sm:pb-xl sm:pt-xl">
        <div className="mx-auto max-w-8xl px-margin">
          <Reveal>
            <header className="max-w-3xl">
              <p className="eyebrow">Writing</p>
              <h1 className="mt-md text-balance font-display text-headline-md font-medium text-on-surface sm:text-headline-lg">
                Notes on building for the web.
              </h1>
              <p className="mt-md max-w-2xl text-body-lg text-secondary">
                Short essays on websites, design, and the business behind both —
                written for the people commissioning the work.
              </p>
            </header>
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-xl">
        <div className="mx-auto max-w-8xl px-margin">
          {posts.length === 0 ? (
            <p className="text-body-md text-secondary">
              New articles are on the way.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-x-gutter gap-y-lg sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Reveal key={post.slug} loose>
                  <BlogPostCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
