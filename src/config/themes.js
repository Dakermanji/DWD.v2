//! src/config/themes.js

import { Laptop, Moon, Sun } from 'lucide-react';

export const themeModes = [
	{ key: 'light', label: 'theme.light', icon: Sun },
	{ key: 'dark', label: 'theme.dark', icon: Moon },
	{ key: 'system', label: 'theme.system', icon: Laptop },
];

export const supportedThemeModes = themeModes.map((t) => t.key);
