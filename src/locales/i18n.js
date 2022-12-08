import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
//
import trLocales from './tr.json';
import enLocales from './en.json';
import chsLocales from './chs.json';
import heLocales from './he.json';

// ----------------------------------------------------------------------

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translations: trLocales },
      en: { translations: enLocales },
      chs: { translations: chsLocales },
      he: { translations: heLocales }
    },
    lng: localStorage.getItem('i18nextLng') || 'tr',
    fallbackLng: 'tr',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
