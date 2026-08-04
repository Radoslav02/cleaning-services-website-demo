import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fontsource-variable/outfit'
import './index.css'
import { LanguageProvider } from './i18n/LanguageContext'
import App from './App'
import Home from './pages/Home'
import OurWork from './pages/OurWork'
import Contact from './pages/Contact'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Home />} />
            <Route path="our-work" element={<OurWork />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
