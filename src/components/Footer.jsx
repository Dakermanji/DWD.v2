//! src/components/Footer.jsx

import { useTranslation } from 'react-i18next';
import CompanyName from './Shared/CompanyName.jsx';

export default function Footer() {
	const { t } = useTranslation();
	const year = new Date().getFullYear();

	return (
		<footer id='footer' role='contentinfo' className='ui-footer'>
			<div className='ui-footer-inner'>
				<p className='ui-footer-line'>
					© {year} <CompanyName />. {t('footer.rights')}
				</p>

				<a
					href='#top'
					className='ui-footer-top'
					aria-label={t('footer.backToTop')}
				>
					<span className='ui-footer-top-icon'>↑</span>
					<span>{t('footer.backToTop')}</span>
				</a>
			</div>
		</footer>
	);
}
