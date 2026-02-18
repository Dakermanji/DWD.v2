//! src/theme/theme.js

const STORAGE_KEY = 'theme'; // "dark" | "light" | "system"

function getSystemTheme() {
	return window.matchMedia?.('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}

export function getThemeMode() {
	return localStorage.getItem(STORAGE_KEY) || 'dark'; // default = dark
}

export function applyTheme(mode) {
	const root = document.documentElement;

	const resolved = mode === 'system' ? getSystemTheme() : mode;
	root.classList.toggle('dark', resolved === 'dark');

	localStorage.setItem(STORAGE_KEY, mode);
}

export function initTheme() {
	applyTheme(getThemeMode());

	// If user chose "system", keep in sync with OS changes
	const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
	const handler = () => {
		if (getThemeMode() === 'system') applyTheme('system');
	};

	mq?.addEventListener?.('change', handler);
	return () => mq?.removeEventListener?.('change', handler);
}
