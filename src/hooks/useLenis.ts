import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useCallback, useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function useLenis() {
  const reducedMotion = usePrefersReducedMotion()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    })

    lenisRef.current = lenis

    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    gsap.ticker.lagSmoothing(0)
    const onTick = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(onTick)

    return () => {
      gsap.ticker.remove(onTick)
      lenis.off('scroll', onScroll)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [reducedMotion])

  const scrollTo = useCallback(
    (
      target: string | HTMLElement | number,
      opts?: Parameters<Lenis['scrollTo']>[1],
    ) => {
      if (reducedMotion) {
        if (typeof target === 'number') {
          window.scrollTo({ top: target, behavior: 'auto' })
          return
        }
        const el =
          typeof target === 'string' ? document.querySelector(target) : target
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      lenisRef.current?.scrollTo(target, {
        offset: -88,
        duration: 1.15,
        ...opts,
      })
    },
    [reducedMotion],
  )

  return { lenis: lenisRef, scrollTo, reducedMotion }
}
