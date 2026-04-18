import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en.json';
import amTranslations from './locales/am.json';

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
    lng: 'en',               // ✅ force English as default
    fallbackLng: 'en',
    load: 'languageOnly',
    nonExplicitSupportedLngs: true,
    cleanCode: true,
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag'], // ✅ broaden detection order
      caches: ['localStorage', 'cookie'],                        // ✅ persist choice in both
      lookupLocalStorage: 'hh_language'                          // custom key for localStorage
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

const updateDocumentLanguage = (language) => {
  if (typeof document === 'undefined') return;
  const normalized = language?.startsWith('am') ? 'am' : 'en';
  document.documentElement.lang = normalized;
  document.documentElement.dir = 'ltr';
};

// ✅ ensure document language syncs with i18n
updateDocumentLanguage(i18n.language || 'en');
i18n.on('languageChanged', updateDocumentLanguage);

export default i18n;
