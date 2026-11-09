import { ImageSquare } from '@phosphor-icons/react'
import { useLang } from '../i18n/LanguageContext'

type Props = {
  /** What image belongs here, e.g. "Technician steam-cleaning a car seat" */
  label: string
  /** CSS aspect-ratio, e.g. "4/3", "1/1", "16/9" */
  ratio?: string
  className?: string
  /** Real photo. When set, it fills the same frame (object-cover) and the label becomes its alt text. */
  src?: string
  /** Load eagerly with high priority (above-the-fold images only). */
  priority?: boolean
}

/**
 * Framed slot for a future photo. The frame, ratio badge, and description make it
 * obvious how the real image will sit in the layout once it is dropped in.
 */
export default function ImagePlaceholder({
  label,
  ratio = '4/3',
  className = '',
  src,
  priority = false,
}: Props) {
  const { t } = useLang()

  if (src) {
    return (
      <figure
        className={`relative isolate w-full overflow-hidden rounded-2xl border border-line bg-cream-dim ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <img
          src={src}
          alt={label}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </figure>
    )
  }

  return (
    <figure
      role="img"
      aria-label={`${t.common.placeholderAria}: ${label}`}
      className={`relative isolate w-full overflow-hidden rounded-2xl border border-line bg-cream-dim ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <svg
        className="absolute inset-0 h-full w-full text-ink/10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 0 L100 100 M100 0 L0 100"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <ImageSquare size={32} className="text-ink/25" aria-hidden="true" />
      </div>
      <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-xl bg-white/85 px-3 py-2 backdrop-blur-sm">
        <span className="truncate text-[13px] leading-snug text-body">{label}</span>
        <span className="shrink-0 rounded-full bg-cream-dim px-2 py-0.5 font-mono text-[11px] text-body">
          {ratio}
        </span>
      </figcaption>
    </figure>
  )
}
