import { createContext, useContext, useState, useEffect } from 'react'
import enTranslations from '../locales/en.json'
import frTranslations from '../locales/fr.json'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to 'en'
    return localStorage.getItem('portfolio-language') || 'en'
  })

  const translations = {
    en: enTranslations,
    fr: frTranslations,
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) return key
    }
    
    return value
  }

  const changeLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('portfolio-language', lang)
  }

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

