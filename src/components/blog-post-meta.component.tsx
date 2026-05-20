interface BlogPostMetaProps {
  category: string
  publishedAt: string
  readingMinutes: number
  className?: string
}

function formatDate(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function BlogPostMeta({
  category,
  publishedAt,
  readingMinutes,
  className,
}: BlogPostMetaProps) {
  return (
    <p className={className ?? 'text-caption text-secondary'}>
      <span className="text-on-surface">{category}</span>
      <span aria-hidden="true"> · </span>
      <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
      <span aria-hidden="true"> · </span>
      <span>{readingMinutes} min read</span>
    </p>
  )
}
