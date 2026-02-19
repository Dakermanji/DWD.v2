//! src/config/languages.js

import caFlag from '../assets/flags/ca.svg';
import qcFlag from '../assets/flags/qc.svg';
import syFlag from '../assets/flags/sy.svg';

export const languages = [
	{ code: 'en', label: 'English', flag: caFlag, altFlag: 'flag.canada' },
	{ code: 'fr', label: 'Français', flag: qcFlag, altFlag: 'flag.quebec' },
	{ code: 'ar', label: 'عربي', flag: syFlag, altFlag: 'flag.syria' },
];

export const supportedLanguageCodes = languages.map((l) => l.code);
