import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { translations } from './translations'
import type { Dict, Lang } from './translations'

type LanguageValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
}

const LanguageContext = createContext<LanguageValue | null>(null)

function initialLang(): Lang {
  const stored = localStorage.getItem('lang')
  return stored === 'en' || stored === 'sr' ? stored : 'sr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang(): LanguageValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
