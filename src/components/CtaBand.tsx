import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

type Props = {
  headline: string
  subtext: string
  headingId: string
}

/** Full-bleed cobalt closing band. The one deliberate color-block moment per page. */
export default function CtaBand({ headline, subtext, headingId }: Props) {
  const { t } = useLang()

  return (
    <section className="bg-cobalt py-16 md:py-20" aria-labelledby={headingId}>
      <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 id={headingId} className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {headline}
          </h2>
          <p className="mt-2 text-[17px] text-white/85">{subtext}</p>
        </div>
        <Link to="/contact" className="btn btn-inverse shrink-0">
          {t.common.ctaQuote}
        </Link>
      </div>
    </section>
  )
}
