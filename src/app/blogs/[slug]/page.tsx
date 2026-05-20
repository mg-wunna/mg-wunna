import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

import { BlogPostCover } from '@/components/blog-post-cover.component'
import { CtaSection } from '@/components/cta-section.component'
import { Reveal } from '@/components/reveal.component'
import { getAllPosts, getPostBySlug } from '@/utilities/blog'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Not found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <>
      <BlogPostCover post={post} />

      <section className="bg-background py-xl">
        <div className="mx-auto max-w-prose px-margin">
          <Reveal>
            <article
              lang={post.lang}
              className="prose max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Reveal>

          <div className="mt-xl border-t border-border pt-md">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-caption text-secondary transition-colors hover:text-on-surface"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Back to writing
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
