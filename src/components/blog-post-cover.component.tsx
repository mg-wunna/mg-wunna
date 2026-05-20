import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { BlogPostMeta } from '@/components/blog-post-meta.component'
import { type BlogPost } from '@/types/blog.type'

interface BlogPostCoverProps {
  post: BlogPost
}

export function BlogPostCover({ post }: BlogPostCoverProps) {
  return (
    <header className="preload-anim preload-delay-200 bg-background pt-lg">
      <div className="mx-auto max-w-editorial px-margin text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-caption text-secondary transition-colors hover:text-on-surface"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          All writing
        </Link>

        <div className="mt-md flex justify-center">
          <BlogPostMeta
            category={post.category}
            publishedAt={post.publishedAt}
            readingMinutes={post.readingMinutes}
            className="eyebrow text-secondary"
          />
        </div>
        <h1 className="mt-md text-balance font-display text-headline-md font-medium text-on-surface sm:text-headline-lg">
          {post.title}
        </h1>
        <p className="mx-auto mt-md max-w-prose text-body-lg text-secondary">
          {post.excerpt}
        </p>
      </div>

      <div className="mt-lg px-margin">
        <div className="mx-auto max-w-8xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted-surface">
            <Image
              src={post.coverImage}
              alt=""
              fill
              priority
              sizes="(min-width: 1440px) 1408px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
