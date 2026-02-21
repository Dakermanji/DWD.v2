//! src/components/ThemeSwitcher/ThemeSwitcher.jsx

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { applyTheme, getThemeMode } from '../../theme/theme.js';
import { themeModes } from '../../config/themes.js';
import useOutsideClick from '../../hooks/useOutsideClick.js';

export default function ThemeSwitcher({ vertical = false }) {
	const { i18n, t } = useTranslation();

	const [open, setOpen] = useState(false);
	const [mode, setMode] = useState(getThemeMode());

	const wrapRef = useRef(null);
	const isRtl = i18n.dir() === 'rtl';

	useOutsideClick(wrapRef, () => setOpen(false), open);

	useEffect(() => {
		applyTheme(mode);
	}, [mode]);

	const current = useMemo(
		() => themeModes.find((m) => m.key === mode) || themeModes[0],
		[mode],
	);

	const CurrentIcon = current.icon;
	const menuLabel = t('theme.label'); // e.g. "Theme"

	function toggle() {
		setOpen((v) => !v);
	}

	function select(key) {
		setMode(key);
		setOpen(false);
	}

	return (
		<div
			ref={wrapRef}
			className='ui-dd'
			data-rtl={isRtl ? 'true' : 'false'}
		>
			<button
				type='button'
				onClick={toggle}
				aria-label={menuLabel}
				title={!vertical ? menuLabel : undefined}
				className='nav-icon-btn ui-ddbtn'
			>
				<CurrentIcon size={16} />
			</button>

			{open && (
				<div className='ui-ddmenu'>
					{themeModes.map(({ key, label, icon: Icon }) => (
						<button
							key={key}
							type='button'
							onClick={() => select(key)}
							className='ui-dditem'
							data-active={mode === key ? 'true' : 'false'}
						>
							<Icon size={16} />
							<span>{t(label)}</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
}
