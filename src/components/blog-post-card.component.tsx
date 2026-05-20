import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { BlogPostMeta } from '@/components/blog-post-meta.component'
import { type BlogPostMeta as BlogPostMetaType } from '@/types/blog.type'

interface BlogPostCardProps {
  post: BlogPostMetaType
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="focus-ring group block focus-visible:rounded-md"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted-surface transition-[transform,box-shadow,border-color] duration-300 ease-out group-hover:-translate-y-1 group-hover:border-on-surface group-hover:shadow-[0_24px_48px_-20px_rgb(0_0_0_/_0.2)]">
        <Image
          src={post.coverImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-3 flex h-10 w-10 -translate-y-1 items-center justify-center rounded-full bg-background/95 text-on-surface opacity-0 shadow-soft ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </span>
      </div>
      <div className="mt-md">
        <BlogPostMeta
          category={post.category}
          publishedAt={post.publishedAt}
          readingMinutes={post.readingMinutes}
        />
        <h3 className="mt-2 text-subheadline font-medium text-on-surface">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-body-md text-secondary">
          {post.excerpt}
        </p>
      </div>
    </Link>
  )
}
