import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'am' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
    >
      {i18n.language === 'en' ? 'AM' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
