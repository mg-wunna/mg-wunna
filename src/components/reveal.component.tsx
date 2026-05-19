'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

import {
  REVEAL_VIEWPORT,
  REVEAL_VIEWPORT_LOOSE,
  fadeUp,
  staggerParent,
} from '@/utilities/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
  loose?: boolean
  as?: 'div' | 'section' | 'header' | 'span' | 'li'
}

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  loose,
  as = 'div',
}: RevealProps) {
  const reduced = useReducedMotion()
  if (reduced) {
    const Tag = as as any
    return <Tag className={className}>{children}</Tag>
  }

  const Comp = motion[as] as any

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={loose ? REVEAL_VIEWPORT_LOOSE : REVEAL_VIEWPORT}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Comp>
  )
}

interface RevealStaggerProps {
  children: ReactNode
  className?: string
  variants?: Variants
  as?: 'div' | 'ul' | 'ol' | 'dl' | 'section'
  loose?: boolean
}

export function RevealStagger({
  children,
  className,
  variants = staggerParent,
  as = 'div',
  loose,
}: RevealStaggerProps) {
  const reduced = useReducedMotion()
  if (reduced) {
    const Tag = as as any
    return <Tag className={className}>{children}</Tag>
  }

  const Comp = motion[as] as any

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={loose ? REVEAL_VIEWPORT_LOOSE : REVEAL_VIEWPORT}
      variants={variants}
    >
      {children}
    </Comp>
  )
}

interface RevealItemProps {
  children: ReactNode
  className?: string
  variants?: Variants
  as?: 'div' | 'li' | 'span' | 'article' | 'section'
}

export function RevealItem({
  children,
  className,
  variants = fadeUp,
  as = 'div',
}: RevealItemProps) {
  const reduced = useReducedMotion()
  if (reduced) {
    const Tag = as as any
    return <Tag className={className}>{children}</Tag>
  }

  const Comp = motion[as] as any

  return (
    <Comp className={className} variants={variants}>
      {children}
    </Comp>
  )
}
