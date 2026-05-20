// High-quality, consistent page screenshots via Puppeteer (Retina 2x).
//
// Modes:
//   default          — full page, 1440×900 desktop viewport
//   --hero           — viewport only, 1440×810 (16:9) @ 3x DPR — for project cover images.
//                      Renders at the CSS width sites are actually designed for so the
//                      layout doesn't look zoomed-out; final output is 4320×2430.
//   --mobile         — full page, 390×844 mobile viewport
//   --theme=light    — force light mode (default)
//   --theme=dark     — force dark mode (sets localStorage + emulates prefers-color-scheme)
//   --width=N        — override viewport width
//   --height=N       — override viewport height
//   --dpr=N          — device scale factor (default 2)
//   --no-wait        — skip the preloader wait
//
// Examples:
//   # Full-page review screenshot
//   node scripts/screenshot.mjs http://localhost:3001/work temp/work.png
//
//   # Dark mode screenshot
//   node scripts/screenshot.mjs http://localhost:3001/work/zayden-lux temp/zayden-lux-dark.png --theme=dark
//
//   # 16:9 hero shot for a project cover (live site)
//   node scripts/screenshot.mjs https://msmebyg3g.pages.dev/ public/images/projects/msme/cover.jpg --hero
//
//   # Mobile screenshot
//   node scripts/screenshot.mjs http://localhost:3001/ temp/home-mobile.png --mobile

import path from 'node:path'
import { mkdir } from 'node:fs/promises'
import puppeteer from 'puppeteer'

function flag(name, fallback) {
  const match = process.argv.find((a) => a.startsWith(`--${name}=`))
  if (match) return match.split('=')[1]
  if (process.argv.includes(`--${name}`)) return true
  return fallback
}

const positional = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const url = positional[0]
const output = positional[1] ?? `temp/screenshot-${Date.now()}.png`

if (!url) {
  console.error(
    'Usage: node scripts/screenshot.mjs <url> [output] [--hero|--mobile] [--width=N --height=N] [--dpr=N]',
  )
  process.exit(1)
}

const isHero = flag('hero', false)
const isMobile = flag('mobile', false)
const noWait = flag('no-wait', false)
const isHeroEarly = process.argv.includes('--hero')
const deviceScaleFactor = Number(flag('dpr', isHeroEarly ? 3 : 2))
const theme = String(flag('theme', 'light')).toLowerCase()
const isDark = theme === 'dark'

let width, height, fullPage
if (isHero) {
  width = Number(flag('width', 1440))
  height = Number(flag('height', 810))
  fullPage = false
} else if (isMobile) {
  width = Number(flag('width', 390))
  height = Number(flag('height', 844))
  fullPage = true
} else {
  width = Number(flag('width', 1440))
  height = Number(flag('height', 900))
  fullPage = true
}

const outAbs = path.resolve(output)
const ext = path.extname(outAbs).toLowerCase()
const type = ext === '.jpg' || ext === '.jpeg' ? 'jpeg' : 'png'

await mkdir(path.dirname(outAbs), { recursive: true })

const browser = await puppeteer.launch({
  headless: 'new',
  defaultViewport: { width, height, deviceScaleFactor, isMobile, hasTouch: isMobile },
})

try {
  const page = await browser.newPage()

  // Force theme: emulate prefers-color-scheme AND inject localStorage before
  // any page script runs, so next-themes hydrates into the right class on <html>.
  await page.emulateMediaFeatures([
    { name: 'prefers-color-scheme', value: isDark ? 'dark' : 'light' },
  ])
  await page.evaluateOnNewDocument((t) => {
    try {
      localStorage.setItem('theme', t)
    } catch {}
  }, isDark ? 'dark' : 'light')

  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60_000 })

  if (!noWait) {
    // If the page has our preloader, wait for it to lift.
    await page
      .waitForFunction(
        () => document.documentElement.classList.contains('loaded'),
        { timeout: 4_000 },
      )
      .catch(() => {})
    await new Promise((r) => setTimeout(r, 1_200))
  }

  const opts = {
    path: outAbs,
    fullPage,
    type,
    omitBackground: false,
  }
  if (type === 'jpeg') opts.quality = 92

  await page.screenshot(opts)

  const mode = isHero ? 'hero 16:9' : isMobile ? 'mobile' : 'desktop full-page'
  console.log(
    `✓ Wrote ${output} (${width}×${height} @${deviceScaleFactor}x, ${mode}, ${isDark ? 'dark' : 'light'})`,
  )
} finally {
  await browser.close()
}
