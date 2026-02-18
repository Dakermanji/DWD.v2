//! src/pages/Home/HomePage.jsx

import { useTranslation } from 'react-i18next';

export default function HomePage() {
	const { t } = useTranslation();

	return (
		<main style={{ padding: 24 }}>
			<h1>{t('app.title')}</h1>
			<h2>{t('home.title')}</h2>
			<p>{t('home.subtitle')}</p>
		</main>
	);
}
