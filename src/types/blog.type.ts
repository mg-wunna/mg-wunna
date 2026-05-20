export type BlogLang = 'en' | 'my'

export interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  category: string
  lang: BlogLang
  publishedAt: string
  readingMinutes: number
  coverImage: string
  coverFocal?: string
}

export interface BlogPost extends BlogPostMeta {
  html: string
}
