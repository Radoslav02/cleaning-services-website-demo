import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Armchair, CarProfile, CheckCircle } from '@phosphor-icons/react'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { PHOTOS } from '../assets/photos'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { pageEnter } from '../lib/motion'
import { useLang } from '../i18n/LanguageContext'

const serviceIcons = [CarProfile, Armchair]

function Hero() {
  const reduce = useReducedMotion()
  const { t } = useLang()

  const enter = (i: number) => pageEnter(reduce, i)

  return (
    <section className="border-b border-line">
      <div className="container-site grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
        <div>
          <motion.p
            {...enter(0)}
            className="text-[12px] font-medium uppercase tracking-[0.16em] text-cobalt"
          >
            {t.home.eyebrow}
          </motion.p>
          <motion.h1
            {...enter(1)}
            className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
          >
            {t.home.heroTitle}
          </motion.h1>
          <motion.p {...enter(2)} className="mt-5 max-w-[44ch] text-lg leading-relaxed text-body">
            {t.home.heroSubtext}
          </motion.p>
          <motion.div {...enter(3)} className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-primary">
              {t.common.ctaQuote}
            </Link>
            <Link to="/our-work" className="btn btn-secondary">
              {t.common.ctaWork}
            </Link>
          </motion.div>
        </div>

        <motion.div {...enter(2)}>
          <ImagePlaceholder
            label={t.home.heroPlaceholder}
            src={PHOTOS.hero}
            priority
            ratio="4/5"
            className="max-w-[440px] lg:ml-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  const { t } = useLang()

  return (
    <section className="py-16 md:py-24" aria-labelledby="services-heading">
      <div className="container-site">
        <Reveal>
          <h2 id="services-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t.home.servicesTitle}
          </h2>
          <p className="mt-3 max-w-[52ch] text-[17px] leading-relaxed text-body">
            {t.home.servicesIntro}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {t.home.services.map(({ title, text, items, placeholder }, i) => {
            const Icon = serviceIcons[i]
            return (
              <Reveal key={title} delay={i * 0.06}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white">
                  <ImagePlaceholder
                    label={placeholder}
                    src={PHOTOS.services[i]}
                    ratio="16/9"
                    className="rounded-none border-0"
                  />
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="flex items-center gap-3">
                      <Icon size={26} className="text-cobalt" aria-hidden="true" />
                      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                    </div>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-body">{text}</p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-[15px] text-body">
                          <CheckCircle size={18} className="shrink-0 text-cobalt" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const { t } = useLang()

  return (
    <section className="border-y border-line bg-white py-16 md:py-24" aria-labelledby="process-heading">
      <div className="container-site">
        <Reveal>
          <h2 id="process-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t.home.processTitle}
          </h2>
        </Reveal>
        <div className="mt-10">
          {t.home.steps.map(({ title, text }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="grid gap-2 border-t border-line py-7 md:grid-cols-[80px_1fr_1.4fr] md:items-baseline md:gap-8">
                <span className="text-2xl font-semibold text-cobalt" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function BeforeAfter() {
  const { t } = useLang()

  return (
    <section className="py-16 md:py-24" aria-labelledby="beforeafter-heading">
      <div className="container-site">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="beforeafter-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">
              {t.home.beforeAfterTitle}
            </h2>
            <p className="mt-3 max-w-[48ch] text-[17px] leading-relaxed text-body">
              {t.home.beforeAfterText}
            </p>
          </div>
          <Link to="/our-work" className="btn btn-secondary">
            {t.common.ctaWork}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <ImagePlaceholder label={t.home.beforeLabel} src={PHOTOS.homeBefore} ratio="4/3" />
          </Reveal>
          <Reveal delay={0.06}>
            <ImagePlaceholder label={t.home.afterLabel} src={PHOTOS.homeAfter} ratio="4/3" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const { t, lang } = useLang()
  // Serbian typographic quotes are „…“, English are “…”.
  const [openQuote, closeQuote] = lang === 'sr' ? ['„', '“'] : ['“', '”']

  return (
    <section className="border-y border-line bg-white py-16 md:py-24" aria-labelledby="quotes-heading">
      <div className="container-site">
        <Reveal>
          <h2 id="quotes-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t.home.quotesTitle}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
          {t.home.quotes.map(({ quote, name, role }, i) => (
            <Reveal key={name} delay={i * 0.05} className="md:px-8 md:first:pl-0 md:last:pr-0">
              <blockquote className="flex h-full flex-col justify-between gap-5">
                <p className="text-[17px] leading-relaxed text-ink">
                  {openQuote}
                  {quote}
                  {closeQuote}
                </p>
                <footer className="text-[14px] text-faint">
                  <span className="font-medium text-body">{name}</span> · {role}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { t } = useLang()

  return (
    <>
      <Hero />
      <Services />
      <Process />
      <BeforeAfter />
      <Testimonials />
      <CtaBand headingId="home-cta" headline={t.home.ctaTitle} subtext={t.home.ctaSubtext} />
    </>
  )
}
