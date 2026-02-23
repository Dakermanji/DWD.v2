//! src/components/ThemeSwitcher/ThemeSwitcher.jsx

import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { applyTheme, getThemeMode } from '../../theme/theme.js';
import { themeModes } from '../../config/themes.js';
import Dropdown from '../Shared/Dropdown.jsx';

export default function ThemeSwitcher({ vertical = false }) {
	const { i18n, t } = useTranslation();

	const [mode, setMode] = useState(getThemeMode());
	const isRtl = i18n.dir() === 'rtl';

	useEffect(() => {
		applyTheme(mode);
	}, [mode]);

	const current = useMemo(
		() => themeModes.find((m) => m.key === mode) || themeModes[0],
		[mode],
	);

	const CurrentIcon = current.icon;
	const menuLabel = t('theme.label');

	function select(key, close) {
		setMode(key);
		close();
	}

	return (
		<Dropdown
			isRtl={isRtl}
			button={({ toggle }) => (
				<button
					type='button'
					onClick={toggle}
					aria-label={menuLabel}
					title={!vertical ? menuLabel : undefined}
					className='nav-icon-btn ui-ddbtn'
				>
					<CurrentIcon />
				</button>
			)}
		>
			{({ close }) => (
				<div className='ui-ddmenu'>
					{themeModes.map(({ key, label, icon: Icon }) => (
						<button
							key={key}
							type='button'
							onClick={() => select(key, close)}
							className='ui-dditem'
							data-active={mode === key ? 'true' : 'false'}
						>
							<Icon />
							<span>{t(label)}</span>
						</button>
					))}
				</div>
			)}
		</Dropdown>
	);
}
