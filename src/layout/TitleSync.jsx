//! src/layout/TitleSync.jsx

import { useEffect } from 'react';
import { useMatches } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function TitleSync() {
	const matches = useMatches();
	const { t } = useTranslation();

	useEffect(() => {
		const last = matches[matches.length - 1];
		const key = last?.handle?.titleKey;

		document.title = key ? 'DWD - ' + t(key) : 'DWD';
	}, [matches, t]);

	return null;
}
