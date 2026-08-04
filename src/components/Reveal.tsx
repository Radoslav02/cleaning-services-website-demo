import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { EASE } from '../lib/motion'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
}

/**
 * Fade-and-rise on scroll entry. Uses a full transform string so Motion can
 * hardware-accelerate it. Decorative only; reduced motion keeps content static.
 */
export default function Reveal({ children, delay = 0, className }: Props) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, transform: 'translateY(24px)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
