import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { marked } from 'marked'

import { type BlogPost, type BlogPostMeta } from '@/types/blog.type'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

function readFilenames(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'))
}

function requireString(
  value: unknown,
  field: string,
  filename: string,
): string {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(
      `Blog post ${filename} is missing required string frontmatter field "${field}".`,
    )
  }
  return value
}

function requireNumber(
  value: unknown,
  field: string,
  filename: string,
): number {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new Error(
      `Blog post ${filename} is missing required number frontmatter field "${field}".`,
    )
  }
  return value
}

function parseMeta(
  filename: string,
  data: Record<string, unknown>,
): BlogPostMeta {
  const slug = filename.replace(/\.md$/, '')
  return {
    slug,
    title: requireString(data.title, 'title', filename),
    excerpt: requireString(data.excerpt, 'excerpt', filename),
    category: requireString(data.category, 'category', filename),
    publishedAt: requireString(data.publishedAt, 'publishedAt', filename),
    readingMinutes: requireNumber(
      data.readingMinutes,
      'readingMinutes',
      filename,
    ),
    coverImage: requireString(data.coverImage, 'coverImage', filename),
  }
}

export function getAllPosts(): BlogPostMeta[] {
  return readFilenames()
    .map((filename) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf8')
      const { data } = matter(raw)
      return parseMeta(filename, data as Record<string, unknown>)
    })
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (slug.includes('/') || slug.includes('\\') || slug.startsWith('.')) {
    return null
  }
  const filename = `${slug}.md`
  const fullPath = path.join(CONTENT_DIR, filename)
  if (!fs.existsSync(fullPath)) return null

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  const meta = parseMeta(filename, data as Record<string, unknown>)
  const html = marked.parse(content, { async: false }) as string

  return { ...meta, html }
}
