import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from '../public/locales/en/common.json';
import zhCNCommon from '../public/locales/zh-CN/common.json';

const resources = {
  en: {
    common: enCommon,
  },
  'zh-CN': {
    common: zhCNCommon,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh-CN', // default language
    fallbackLng: 'zh-CN',
    interpolation: {
      escapeValue: false,
    },
    ns: ['common'],
    defaultNS: 'common',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;