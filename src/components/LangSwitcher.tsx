import { useLang } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/translations'

/** Serbian tricolor (simplified, without the coat of arms). */
function FlagRS() {
  return (
    <svg viewBox="0 0 60 40" className="h-3.5 w-5 rounded-[3px]" aria-hidden="true">
      <rect width="60" height="40" fill="#c6363c" />
      <rect y="13.33" width="60" height="13.33" fill="#0c4076" />
      <rect y="26.66" width="60" height="13.34" fill="#ffffff" />
    </svg>
  )
}

/** Union Jack (simplified). */
function FlagGB() {
  return (
    <svg viewBox="0 0 60 40" className="h-3.5 w-5 rounded-[3px]" aria-hidden="true">
      <clipPath id="gb-clip">
        <rect width="60" height="40" rx="0" />
      </clipPath>
      <g clipPath="url(#gb-clip)">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#ffffff" strokeWidth="8" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#c8102e" strokeWidth="4" />
        <path d="M30,0 V40 M0,20 H60" stroke="#ffffff" strokeWidth="13" />
        <path d="M30,0 V40 M0,20 H60" stroke="#c8102e" strokeWidth="8" />
      </g>
    </svg>
  )
}

const options: { lang: Lang; label: string; short: string; Flag: () => React.JSX.Element }[] = [
  { lang: 'sr', label: 'Srpski', short: 'SR', Flag: FlagRS },
  { lang: 'en', label: 'English', short: 'EN', Flag: FlagGB },
]

/** Both flags always visible; the active language is highlighted. */
export default function LangSwitcher() {
  const { lang, setLang, t } = useLang()

  return (
    <div
      role="group"
      aria-label={t.common.langSwitcherAria}
      className="flex items-center gap-0.5 rounded-full border border-line bg-white p-0.5"
    >
      {options.map(({ lang: value, label, short, Flag }) => {
        const active = lang === value
        return (
          <button
            key={value}
            type="button"
            lang={value}
            aria-label={label}
            aria-pressed={active}
            onClick={() => setLang(value)}
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[13px] transition-colors duration-150 ${
              active ? 'bg-cream-dim font-medium text-ink' : 'text-body hover:text-ink'
            }`}
          >
            <Flag />
            {short}
          </button>
        )
      })}
    </div>
  )
}
