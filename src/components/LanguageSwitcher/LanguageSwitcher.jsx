//! src/components/LanguageSwitcher/LanguageSwitcher.jsx

import { useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../../config/languages.js';
import LanguageButton from './LanguageButton.jsx';
import LanguageMenu from './LanguageMenu.jsx';
import useOutsideClick from '../../hooks/useOutsideClick.js';

export default function LanguageSwitcher({ vertical = false }) {
	const { i18n, t } = useTranslation();
	const [open, setOpen] = useState(false);
	const wrapRef = useRef(null);

	const currentCode = (i18n.resolvedLanguage || 'en').split('-')[0];
	const current = useMemo(
		() => languages.find((l) => l.code === currentCode) || languages[0],
		[currentCode],
	);

	const isRtl = i18n.dir() === 'rtl';
	const label = t('lang.label');

	useOutsideClick(wrapRef, () => setOpen(false), open);

	function toggle() {
		setOpen((v) => !v);
	}

	function selectLang(code) {
		i18n.changeLanguage(code);
		setOpen(false);
	}

	return (
		<div
			ref={wrapRef}
			className='ui-dd'
			data-rtl={isRtl ? 'true' : 'false'}
		>
			<LanguageButton
				current={current}
				onClick={toggle}
				title={!vertical ? label : undefined}
				ariaLabel={label}
			/>

			{open && (
				<LanguageMenu
					items={languages}
					activeCode={current.code}
					onSelect={selectLang}
				/>
			)}
		</div>
	);
}
