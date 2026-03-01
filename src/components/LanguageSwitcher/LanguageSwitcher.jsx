//! src/components/LanguageSwitcher/LanguageSwitcher.jsx

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../../config/languages.js';
import Dropdown from '../ui/Dropdown.jsx';
import LanguageButton from './LanguageButton.jsx';
import LanguageMenu from './LanguageMenu.jsx';

export default function LanguageSwitcher({ vertical = false }) {
	const { i18n, t } = useTranslation();

	const currentCode = (i18n.resolvedLanguage || 'en').split('-')[0];
	const current = useMemo(
		() => languages.find((l) => l.code === currentCode) || languages[0],
		[currentCode],
	);

	const isRtl = i18n.dir() === 'rtl';
	const label = t('lang.label');

	function selectLang(code, close) {
		i18n.changeLanguage(code);
		close();
	}

	return (
		<Dropdown
			isRtl={isRtl}
			button={({ toggle }) => (
				<LanguageButton
					current={current}
					onClick={toggle}
					title={!vertical ? label : undefined}
					ariaLabel={label}
				/>
			)}
		>
			{({ close }) => (
				<LanguageMenu
					items={languages}
					activeCode={current.code}
					onSelect={(code) => selectLang(code, close)}
				/>
			)}
		</Dropdown>
	);
}
