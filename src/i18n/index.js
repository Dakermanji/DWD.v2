//! src/i18n/index.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { supportedLanguageCodes } from '../config/languages.js';

// Namespaces
import enLayout from './locales/en/layout.json';
import frLayout from './locales/fr/layout.json';
import arLayout from './locales/ar/layout.json';

import enHome from './locales/en/home.json';
import frHome from './locales/fr/home.json';
import arHome from './locales/ar/home.json';

const resources = {
	en: {
		layout: enLayout,
		home: enHome,
	},
	fr: {
		layout: frLayout,
		home: frHome,
	},
	ar: {
		layout: arLayout,
		home: arHome,
	},
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

		// namespaces
		ns: ['layout', 'home'],
		defaultNS: 'layout',

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
