/** Site-wide easing, mirrored by --ease-snap in index.css. One curve, one voice. */
export const EASE = [0.23, 1, 0.32, 1] as const

/**
 * Staggered entrance for above-the-fold content when a page is landed on.
 * Pass the index of the element in the entrance sequence; ~50ms between items.
 * With reduced motion, elements render in place (the page-level fade still runs).
 */
export const pageEnter = (reduce: boolean | null, i = 0) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, transform: 'translateY(20px)' },
        animate: { opacity: 1, transform: 'translateY(0px)' },
        transition: { duration: 0.45, delay: i * 0.05, ease: EASE },
      }
