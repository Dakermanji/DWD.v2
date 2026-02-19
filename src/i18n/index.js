//! src/i18n/index.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { supportedLanguageCodes } from '../config/languages.js';

import enCommon from './locales/en/common.json';
import frCommon from './locales/fr/common.json';
import arCommon from './locales/ar/common.json';

const resources = {
	en: { translation: enCommon },
	fr: { translation: frCommon },
	ar: { translation: arCommon },
};

i18n.use(
	new LanguageDetector(null, {
		order: ['cookie', 'navigator'],
		lookupCookie: 'lang',
		caches: ['cookie'],
		cookieMinutes: 60 * 24 * 365, // 1 year
	}),
)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		supportedLngs: supportedLanguageCodes,
		nonExplicitSupportedLngs: true, // maps fr-CA -> fr, en-US -> en
		interpolation: { escapeValue: false },
		react: { useSuspense: false },
	});

// Keep <html lang=""> and RTL correct
const syncHtml = (lng) => {
	const lang = (lng || 'en').split('-')[0];
	document.documentElement.lang = lang;
	document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
};

syncHtml(i18n.language);
i18n.on('languageChanged', syncHtml);

export default i18n;
