import { type Variants } from 'framer-motion'

const ENTER_EASE = [0.22, 1, 0.36, 1] as const
const SPRING_EASE = [0.34, 1.56, 0.64, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: ENTER_EASE },
  },
}

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ENTER_EASE },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: ENTER_EASE },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: SPRING_EASE },
  },
}

export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.02 },
  },
}

export const staggerParentFast: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0 },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ENTER_EASE },
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ENTER_EASE },
  },
}

// Positive margin = trigger BEFORE element enters viewport, so the animation
// fires as content scrolls in (not 80px after it's already on screen).
export const REVEAL_VIEWPORT = {
  once: true,
  margin: '0px 0px -10% 0px',
} as const
export const REVEAL_VIEWPORT_LOOSE = {
  once: true,
  margin: '0px 0px -5% 0px',
} as const
