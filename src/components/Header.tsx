import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { List, X } from '@phosphor-icons/react'
import { EASE } from '../lib/motion'
import { useLang } from '../i18n/LanguageContext'
import LangSwitcher from './LangSwitcher'
import BrandLogo from './Logo'

function Logo({ label }: { label: string }) {
  return (
    <Link to="/" aria-label={label} className="rounded-xl">
      <BrandLogo />
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const { t } = useLang()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur-md">
      <div className="container-site flex h-[68px] items-center justify-between gap-4">
        <Logo label={t.header.logoAria} />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {t.header.nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-[15px] transition-colors duration-150 ${
                  isActive ? 'font-medium text-ink' : 'text-body hover:text-ink'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitcher />
        </div>

        <button
          type="button"
          className="btn -mr-2 !p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t.header.closeMenu : t.header.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Main"
            className="border-t border-line bg-cream lg:hidden"
            initial={{ opacity: 0, transform: reduce ? 'none' : 'translateY(-8px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            exit={{
              opacity: 0,
              transform: reduce ? 'none' : 'translateY(-8px)',
              transition: { duration: 0.14, ease: EASE },
            }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            <div className="container-site flex flex-col gap-1 py-4">
              {t.header.nav.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2.5 text-[16px] transition-colors duration-150 active:bg-cream-dim ${
                      isActive ? 'bg-cream-dim font-medium text-ink' : 'text-body'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <div className="mt-3 flex items-center gap-3">
                <LangSwitcher />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
