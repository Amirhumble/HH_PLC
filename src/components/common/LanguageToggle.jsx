import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage?.startsWith('am') ? 'am' : 'en';

  const setLanguage = (lang) => {
    if (lang !== currentLanguage) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <div
      className="inline-flex items-center rounded-full border border-primary/40 bg-white p-1 shadow-sm"
      role="group"
      aria-label={t('language.ariaLabel')}
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
          currentLanguage === 'en'
            ? 'bg-primary text-white'
            : 'text-primary hover:bg-primary/10'
        }`}
        aria-pressed={currentLanguage === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('am')}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
          currentLanguage === 'am'
            ? 'bg-primary text-white'
            : 'text-primary hover:bg-primary/10'
        }`}
        aria-pressed={currentLanguage === 'am'}
      >
        አማ
      </button>
    </div>
  );
};

export default LanguageToggle;
