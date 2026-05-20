import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { marked } from 'marked'

import {
  type BlogLang,
  type BlogPost,
  type BlogPostMeta,
} from '@/types/blog.type'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')
const SUPPORT_FILENAMES = new Set(['roadmap.md', 'voice-myanmar.md'])

function readFilenames(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md') && !SUPPORT_FILENAMES.has(f))
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

function parseLang(value: unknown, filename: string): BlogLang {
  if (value === undefined || value === null) return 'en'
  if (value === 'en' || value === 'my') return value
  throw new Error(
    `Blog post ${filename} has invalid frontmatter field "lang": expected "en" or "my", got ${JSON.stringify(value)}.`,
  )
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
    lang: parseLang(data.lang, filename),
    publishedAt: requireString(data.publishedAt, 'publishedAt', filename),
    readingMinutes: requireNumber(
      data.readingMinutes,
      'readingMinutes',
      filename,
    ),
    coverImage: requireString(data.coverImage, 'coverImage', filename),
    coverFocal:
      typeof data.coverFocal === 'string' && data.coverFocal.trim() !== ''
        ? data.coverFocal
        : undefined,
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
