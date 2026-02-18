//! src/components/LanguageSwitcher/LanguageSwitcher.jsx

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
	const { t, i18n } = useTranslation();

	const setLang = (e) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
		<label style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>
			<span style={{ fontSize: 14, opacity: 0.8 }}>
				{t('lang.label')}
			</span>
			<select value={i18n.resolvedLanguage} onChange={setLang}>
				<option value='en'>English</option>
				<option value='fr'>Français</option>
				<option value='ar'>العربية</option>
			</select>
		</label>
	);
}
