//! src/pages/Home/sections/PortfolioSection.jsx

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import SectionTitle from '../../../components/shared/SectionTitle.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';

import '../styles/portfolio.css';

export default function PortfolioSection() {
	const { t, i18n } = useTranslation('home');
	const [visibleCount, setVisibleCount] = useState(3);

	const items = t('portfolio.items', { returnObjects: true }) || [];
	const lang = i18n.resolvedLanguage || i18n.language;

	const canSeeMore = Array.isArray(items) && visibleCount < items.length;

	return (
		<section id='portfolio' className='portfolio-section'>
			<div className='portfolio-container'>
				<SectionTitle>{t('portfolio.title')}</SectionTitle>

				<div className='portfolio-grid'>
					{Array.isArray(items) &&
						items.slice(0, visibleCount).map((item) => (
							<PortfolioCard
								key={item.id ?? item.link ?? item.title}
								title={item.title}
								href={`/${item.link}`}
								imgSrc={`/images/index/projects/${item.img}`}
								imgAlt={t('screenshot_of', {
									title: item.title,
								})}
							/>
						))}

					<PortfolioCard
						disabled
						title={t('portfolio.under_construction.title')}
						imgSrc={`/images/index/projects/under_construction_${lang}.png`}
						imgAlt={t('portfolio.under_construction.imgAlt')}
					/>
				</div>

				{canSeeMore && (
					<div className='portfolio-btn-wrapper'>
						<button
							className='portfolio-btn'
							type='button'
							onClick={() => setVisibleCount((c) => c + 3)}
							aria-label={t('portfolio.see_more_btn')}
						>
							{t('portfolio.see_more_btn')}
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
