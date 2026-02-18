//! src/components/ThemeSwitcher/ThemeSwitcher.jsx

import { useEffect, useState } from 'react';
import { Laptop, Moon, Sun } from 'lucide-react';
import { applyTheme, getThemeMode } from '../../theme/theme.js';

const THEMES = [
	{ key: 'light', label: 'Light mode', icon: Sun },
	{ key: 'dark', label: 'Dark mode', icon: Moon },
	{ key: 'system', label: 'System mode', icon: Laptop },
];

export default function ThemeSwitcher() {
	const [mode, setMode] = useState(getThemeMode());

	useEffect(() => {
		applyTheme(mode);
	}, [mode]);

	return (
		<div className='flex items-center gap-2'>
			{THEMES.map(({ key, label, icon: Icon }) => (
				<button
					key={key}
					type='button'
					className='icon-btn'
					data-active={mode === key}
					onClick={() => setMode(key)}
					aria-label={label}
				>
					<Icon size={16} />
				</button>
			))}
		</div>
	);
}
