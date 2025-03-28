import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translations.en },
      ru: { translation: translations.ru },
      et: { translation: translations.et },
      lv: { translation: translations.lv },
      lt: { translation: translations.lt }
    },
    lng: 'en', // 默认语言
    fallbackLng: 'en', // 回退语言
    interpolation: {
      escapeValue: false // 不转义HTML内容
    }
  });

export default i18n;