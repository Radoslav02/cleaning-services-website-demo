import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Height of the sticky site header; cards pin just below it. */
const HEADER_OFFSET = 68

type Props = {
  cards: ReactNode[]
}

/**
 * Scroll-pinned card stack (taste-skill 5.A). Each card sticks below the header at
 * full viewport height; as the next card scrolls in, the covered card scales down
 * and fades, scrubbed to scroll position. CSS sticky does the pinning (GPU-cheap),
 * GSAP only scrubs transform/opacity. On mobile and under prefers-reduced-motion
 * the cards flow as a plain list — gsap.matchMedia never activates.
 */
export default function StickyCompareStack({ cards }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const mm = gsap.matchMedia(ref)
    mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      const cardEls = gsap.utils.toArray<HTMLElement>('.stack-card', ref.current)
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.55,
          ease: 'none',
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: 'top bottom',
            end: `top ${HEADER_OFFSET}`,
            scrub: true,
          },
        })
      })
    })
    return () => mm.revert()
  }, [])

  return (
    <div ref={ref}>
      {cards.map((card, i) => (
        <div
          key={i}
          className="stack-card py-4 md:sticky md:top-[68px] md:flex md:min-h-[calc(100dvh-68px)] md:items-center md:py-0"
        >
          {card}
        </div>
      ))}
    </div>
  )
}
