import { Link } from 'react-router-dom'
import { Clock, EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react'
import { useLang } from '../i18n/LanguageContext'
import { CONTACT } from '../i18n/translations'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-line bg-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-cobalt text-[15px] font-semibold text-white"
            >
              R
            </span>
            <span className="text-[17px] font-semibold tracking-tight">Revive Interiors</span>
          </div>
          <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-body">{t.footer.blurb}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-medium text-ink">{t.footer.pagesTitle}</h2>
          <ul className="mt-4 space-y-2.5 text-[15px] text-body">
            {t.header.nav.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="hover:text-ink">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-medium text-ink">{t.footer.servicesTitle}</h2>
          <ul className="mt-4 space-y-2.5 text-[15px] text-body">
            {t.footer.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <address className="not-italic">
          <h2 className="text-sm font-medium text-ink">{t.footer.reachTitle}</h2>
          <ul className="mt-4 space-y-2.5 text-[15px] text-body">
            <li className="flex items-center gap-2.5">
              <Phone size={18} className="shrink-0 text-cobalt" aria-hidden="true" />
              <a href={CONTACT.phoneHref} className="hover:text-ink">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <EnvelopeSimple size={18} className="shrink-0 text-cobalt" aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-ink">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin size={18} className="shrink-0 text-cobalt" aria-hidden="true" />
              <span>{t.footer.area}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock size={18} className="shrink-0 text-cobalt" aria-hidden="true" />
              <span>{t.footer.hours}</span>
            </li>
          </ul>
        </address>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-2 py-5 text-[13px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.legal}</p>
          <p>{t.footer.badges}</p>
        </div>
      </div>
    </footer>
  )
}
