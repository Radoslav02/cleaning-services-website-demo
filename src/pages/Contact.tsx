import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { CheckCircle, Clock, EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react'
import { EASE, pageEnter } from '../lib/motion'
import { useLang } from '../i18n/LanguageContext'
import { CONTACT } from '../i18n/translations'

type Errors = Partial<Record<'name' | 'phone' | 'service', string>>

function ContactDetails() {
  const { t } = useLang()
  const reduce = useReducedMotion()

  return (
    <div>
      <motion.h1 {...pageEnter(reduce, 0)} className="text-4xl font-semibold tracking-tight md:text-5xl">
        {t.contact.title}
      </motion.h1>
      <motion.p {...pageEnter(reduce, 1)} className="mt-4 max-w-[44ch] text-lg leading-relaxed text-body">
        {t.contact.intro}
      </motion.p>

      <motion.ul {...pageEnter(reduce, 2)} className="mt-10 space-y-5">
        <li className="flex items-start gap-3.5">
          <Phone size={22} className="mt-0.5 shrink-0 text-cobalt" aria-hidden="true" />
          <div>
            <p className="font-medium">{t.contact.callLabel}</p>
            <a href={CONTACT.phoneHref} className="text-[15px] text-body hover:text-ink">
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </li>
        <li className="flex items-start gap-3.5">
          <EnvelopeSimple size={22} className="mt-0.5 shrink-0 text-cobalt" aria-hidden="true" />
          <div>
            <p className="font-medium">{t.contact.emailLabel}</p>
            <a href={`mailto:${CONTACT.email}`} className="text-[15px] text-body hover:text-ink">
              {CONTACT.email}
            </a>
          </div>
        </li>
        <li className="flex items-start gap-3.5">
          <MapPin size={22} className="mt-0.5 shrink-0 text-cobalt" aria-hidden="true" />
          <div>
            <p className="font-medium">{t.contact.areaLabel}</p>
            <p className="text-[15px] text-body">{t.contact.areaText}</p>
          </div>
        </li>
        <li className="flex items-start gap-3.5">
          <Clock size={22} className="mt-0.5 shrink-0 text-cobalt" aria-hidden="true" />
          <div>
            <p className="font-medium">{t.contact.hoursLabel}</p>
            <p className="text-[15px] text-body">{t.contact.hoursText}</p>
          </div>
        </li>
      </motion.ul>
    </div>
  )
}

export default function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const successRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { t } = useLang()

  useEffect(() => {
    if (sent) successRef.current?.focus()
  }, [sent])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next: Errors = {}
    if (!name.trim()) next.name = t.contact.errors.name
    if (!phone.trim()) next.phone = t.contact.errors.phone
    if (!service) next.service = t.contact.errors.service
    setErrors(next)
    const firstInvalid = (['name', 'phone', 'service'] as const).find((key) => next[key])
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus()
    } else {
      setSent(true)
    }
  }

  const successBody = t.contact.successBody.replace('{name}', name.trim().split(' ')[0])

  return (
    <section className="py-14 md:py-20">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <ContactDetails />

        <motion.div {...pageEnter(reduce, 2)}>
          <AnimatePresence mode="wait" initial={false}>
          {sent ? (
            <motion.div
              key="success"
              ref={successRef}
              tabIndex={-1}
              initial={reduce ? { opacity: 0 } : { opacity: 0, transform: 'scale(0.97)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              transition={{ duration: 0.2, ease: EASE }}
              className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-line bg-white p-8 text-center"
              role="status"
            >
              <CheckCircle size={44} className="text-cobalt" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">{t.contact.successTitle}</h2>
              <p className="mt-2 max-w-[36ch] text-[15px] leading-relaxed text-body">{successBody}</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              noValidate
              exit={{
                opacity: 0,
                transform: reduce ? 'none' : 'translateY(-4px)',
                transition: { duration: 0.15, ease: EASE },
              }}
              className="rounded-2xl border border-line bg-white p-6 md:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight">{t.contact.formTitle}</h2>

              <div className="mt-6 grid gap-5">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    className="field-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-[13px] text-danger">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className="field-input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    aria-invalid={errors.phone ? true : undefined}
                    aria-describedby={errors.phone ? 'phone-error' : 'phone-help'}
                  />
                  {errors.phone ? (
                    <p id="phone-error" role="alert" className="text-[13px] text-danger">
                      {errors.phone}
                    </p>
                  ) : (
                    <p id="phone-help" className="text-[13px] text-faint">
                      {t.contact.phoneHelp}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    {t.contact.serviceLabel}
                  </label>
                  <select
                    id="service"
                    className="field-input appearance-none"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    aria-invalid={errors.service ? true : undefined}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                  >
                    {t.contact.serviceOptions.map(({ value, label }) => (
                      <option key={value} value={value} disabled={value === ''}>
                        {label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" role="alert" className="text-[13px] text-danger">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t.contact.detailsLabel}{' '}
                    <span className="font-normal text-faint">{t.contact.detailsOptional}</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="field-input resize-y"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-describedby="message-help"
                  />
                  <p id="message-help" className="text-[13px] text-faint">
                    {t.contact.detailsHelp}
                  </p>
                </div>

                <button type="submit" className="btn btn-primary mt-1 justify-self-start">
                  {t.contact.submit}
                </button>
              </div>
            </motion.form>
          )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
