'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Phase = 'loading' | 'split' | 'done'

// How long the spinner shows minimum, even on instant loads.
const MIN_DISPLAY_MS = 900
// How long the vertical split animation takes.
const SPLIT_DURATION_MS = 650
// Spinner rotation duration — slower for a calmer feel.
const SPIN_DURATION_MS = 1800

export function Preloader() {
  const [phase, setPhase] = useState<Phase>('loading')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduced) {
      document.documentElement.classList.add('loaded')
      setPhase('done')
      return
    }

    const start = performance.now()

    function trigger() {
      const elapsed = performance.now() - start
      const wait = Math.max(0, MIN_DISPLAY_MS - elapsed)
      window.setTimeout(() => setPhase('split'), wait)
    }

    if (document.readyState === 'complete') {
      trigger()
    } else {
      window.addEventListener('load', trigger, { once: true })
      return () => window.removeEventListener('load', trigger)
    }
  }, [])

  // Fire content-reveal animations as soon as the panels start splitting open.
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (phase === 'split' || phase === 'done') {
      document.documentElement.classList.add('loaded')
    }
  }, [phase])

  useEffect(() => {
    if (phase !== 'split') return
    const t = window.setTimeout(() => setPhase('done'), SPLIT_DURATION_MS + 100)
    return () => clearTimeout(t)
  }, [phase])

  // Lock scroll while the overlay is on screen.
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (phase === 'done') {
      document.documentElement.style.removeProperty('overflow')
      return
    }
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.removeProperty('overflow')
    }
  }, [phase])

  if (phase === 'done') return null

  const isSplit = phase === 'split'

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100]"
    >
      {/* Top half — slides up off-screen on split */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-background transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isSplit ? '-translate-y-full' : 'translate-y-0'
        }`}
        style={{ transitionDuration: `${SPLIT_DURATION_MS}ms` }}
      />
      {/* Bottom half — slides down off-screen on split */}
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-background transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isSplit ? 'translate-y-full' : 'translate-y-0'
        }`}
        style={{ transitionDuration: `${SPLIT_DURATION_MS}ms` }}
      />
      {/* Spinning logo */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
          isSplit ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div
          className={isSplit ? '' : 'animate-spin'}
          style={
            isSplit ? undefined : { animationDuration: `${SPIN_DURATION_MS}ms` }
          }
        >
          <Image
            src="/logo-light.svg"
            alt=""
            width={56}
            height={56}
            priority
            className="h-14 w-14 dark:hidden"
          />
          <Image
            src="/logo-dark.svg"
            alt=""
            width={56}
            height={56}
            priority
            className="hidden h-14 w-14 dark:block"
          />
        </div>
      </div>
    </div>
  )
}
