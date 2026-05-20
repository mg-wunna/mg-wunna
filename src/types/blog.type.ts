export interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readingMinutes: number
  coverImage: string
}

export interface BlogPost extends BlogPostMeta {
  html: string
}
