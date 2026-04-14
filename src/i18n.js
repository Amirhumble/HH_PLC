import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslations from './locales/en.json'
import amTranslations from './locales/am.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    resources: {
      en: { translation: enTranslations },
      am: { translation: amTranslations }
    },
    supportedLngs: ['en', 'am'],
    fallbackLng: 'en',
    load: 'languageOnly',
    nonExplicitSupportedLngs: true,
    cleanCode: true,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'hh_language'
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  })

const updateDocumentLanguage = (language) => {
  if (typeof document === 'undefined') return
  const normalized = language?.startsWith('am') ? 'am' : 'en'
  document.documentElement.lang = normalized
  document.documentElement.dir = 'ltr'
}

updateDocumentLanguage(i18n.resolvedLanguage || i18n.language)
i18n.on('languageChanged', updateDocumentLanguage)

export default i18n
