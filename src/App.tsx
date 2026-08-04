import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useLang } from './i18n/LanguageContext'
import { EASE } from './lib/motion'

export default function App() {
  const { pathname } = useLocation()
  const { t } = useLang()
  const reduce = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    document.title = t.titles[pathname] ?? t.titles.fallback
  }, [pathname, t])

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cobalt focus:px-5 focus:py-2.5 focus:text-white"
      >
        {t.common.skipToContent}
      </a>
      <Header />
      {/* Keyed by pathname so the landing fade replays on every route change.
          Opacity-only here; per-page elements add their own staggered rise. */}
      <motion.main
        key={pathname}
        id="main"
        className="flex-1"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: EASE }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  )
}
