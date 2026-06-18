import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import type { RefObject } from 'react'
import { useLayoutEffect } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

type RevealOptions = {
  scope: RefObject<HTMLElement | null>
  selector: string
  trigger?: HTMLElement | null
  start?: string
  y?: number
  duration?: number
  stagger?: number
}

export function useGsapReveal({
  scope,
  selector,
  trigger,
  start = 'top 82%',
  y = 60,
  duration = 0.9,
  stagger = 0.1,
}: RevealOptions) {
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reducedMotion) return
    const root = scope.current
    if (!root) return

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(selector)
      if (!els.length) return

      gsap.set(els, { opacity: 0, y })

      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: trigger ?? root,
          start,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [duration, reducedMotion, scope, selector, stagger, start, trigger, y])
}
