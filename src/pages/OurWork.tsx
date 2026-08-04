import { motion, useReducedMotion } from 'motion/react'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import StickyCompareStack from '../components/StickyCompareStack'
import { pageEnter } from '../lib/motion'
import { useLang } from '../i18n/LanguageContext'
import type { Dict } from '../i18n/translations'

type Job = Dict['work']['carJobs'][number]

/** Full-width before/after card used inside the scroll-pinned stack. */
function CompareCard({ job }: { job: Job }) {
  return (
    <article className="w-full rounded-2xl border border-line bg-white p-5 shadow-[0_24px_60px_-32px_rgba(23,26,33,0.35)] md:p-8">
      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{job.title}</h3>
      <p className="mt-1.5 max-w-[70ch] text-[15px] leading-relaxed text-body">{job.detail}</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <ImagePlaceholder label={job.before} ratio="4/3" />
        <ImagePlaceholder label={job.after} ratio="4/3" />
      </div>
    </article>
  )
}

/** Row layout: text column beside the photo pair, divided rows. Used for the home section. */
function JobRow({ job }: { job: Job }) {
  return (
    <Reveal>
      <article className="grid gap-5 border-t border-line py-8 md:grid-cols-[1fr_1.6fr] md:items-center md:gap-10">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{job.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-body">{job.detail}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <ImagePlaceholder label={job.before} ratio="3/2" />
          <ImagePlaceholder label={job.after} ratio="3/2" />
        </div>
      </article>
    </Reveal>
  )
}

export default function OurWork() {
  const { t } = useLang()
  const reduce = useReducedMotion()

  return (
    <>
      <section className="border-b border-line">
        <div className="container-site py-14 md:py-18">
          <motion.h1
            {...pageEnter(reduce, 0)}
            className="text-4xl font-semibold tracking-tight md:text-5xl"
          >
            {t.work.title}
          </motion.h1>
          <motion.p
            {...pageEnter(reduce, 1)}
            className="mt-4 max-w-[52ch] text-lg leading-relaxed text-body"
          >
            {t.work.intro}
          </motion.p>
        </div>
      </section>

      <section className="py-14 md:py-20" aria-labelledby="car-work">
        <div className="container-site">
          <Reveal>
            <h2 id="car-work" className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t.work.carTitle}
            </h2>
          </Reveal>
          <div className="mt-8 md:mt-4">
            <StickyCompareStack
              cards={t.work.carJobs.map((job) => (
                <CompareCard key={job.title} job={job} />
              ))}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white py-14 md:py-20" aria-labelledby="home-work">
        <div className="container-site">
          <Reveal>
            <h2 id="home-work" className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t.work.homeTitle}
            </h2>
          </Reveal>
          <div className="mt-8">
            {t.work.homeJobs.map((job) => (
              <JobRow key={job.title} job={job} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand headingId="work-cta" headline={t.work.ctaTitle} subtext={t.work.ctaSubtext} />
    </>
  )
}
