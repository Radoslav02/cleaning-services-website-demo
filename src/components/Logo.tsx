import { BRAND } from '../i18n/translations'

/**
 * Brand mark: cobalt tile with a clean water drop and a sparkle.
 * Mirrored in public/favicon.svg, so keep the two in sync.
 */
export function BrandMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" className="shrink-0">
      <rect width="40" height="40" rx="11" fill="var(--color-cobalt)" />
      <path d="M19 8.5C19 8.5 10.5 18.6 10.5 24.3a8.5 8.5 0 0 0 17 0C27.5 18.6 19 8.5 19 8.5Z" fill="#fff" />
      <path
        d="M14.8 24.8a4.3 4.3 0 0 0 4.3 4.3"
        fill="none"
        stroke="var(--color-cobalt)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M30 6.5c.5 2.9 1.1 3.5 4 4-2.9.5-3.5 1.1-4 4-.5-2.9-1.1-3.5-4-4 2.9-.5 3.5-1.1 4-4Z"
        fill="#fff"
      />
    </svg>
  )
}

/** Mark + wordmark lockup used in the header and footer. */
export default function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <BrandMark />
      <span className="text-[20px] font-semibold leading-none tracking-[-0.02em] text-ink">
        {BRAND}
      </span>
    </span>
  )
}
