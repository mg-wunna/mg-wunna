import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const OUT_DIR = path.resolve('public/images/blog')
const OUT_PATH = path.join(OUT_DIR, 'placeholder.jpg')

const svg = `
<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18181b"/>
      <stop offset="55%" stop-color="#27272a"/>
      <stop offset="100%" stop-color="#3f1d1d"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="22%" r="55%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#g)"/>
  <rect width="1920" height="1080" fill="url(#glow)"/>
</svg>
`

await mkdir(OUT_DIR, { recursive: true })
await sharp(Buffer.from(svg)).jpeg({ quality: 82 }).toFile(OUT_PATH)
console.log(`Wrote ${OUT_PATH}`)
