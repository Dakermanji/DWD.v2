//! src/pages/Home/sections/PortfolioSection.jsx

import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import SectionTitle from '../../../components/shared/SectionTitle';
import SectionButton from '../../../components/shared/SectionButton';
import PortfolioCard from '../components/PortfolioCard.jsx';
import useCardsPerRow from '../hooks/useCardsPerRow.js';

import '../styles/portfolio.css';

export default function PortfolioSection() {
	const { t, i18n } = useTranslation('home');

	const cardsPerRow = useCardsPerRow();

	// Visible grows by cardsPerRow (1/2/3)
	const [visibleCount, setVisibleCount] = useState(cardsPerRow);

	// Keep visibleCount aligned with cardsPerRow if screen changes
	const alignedVisibleCount = useMemo(() => {
		return Math.max(
			cardsPerRow,
			Math.ceil(visibleCount / cardsPerRow) * cardsPerRow,
		);
	}, [visibleCount, cardsPerRow]);

	const items = useMemo(() => {
		const raw = t('portfolio.items', { returnObjects: true });
		return Array.isArray(raw) ? raw : [];
	}, [t]);

	const lang = i18n.resolvedLanguage || i18n.language;

	// Under Construction is treated as 1 extra card at the end
	const totalCards = items.length + 1;

	const clampedVisible = Math.min(alignedVisibleCount, totalCards);

	const visibleProjects = useMemo(() => {
		return items.slice(0, Math.min(clampedVisible, items.length));
	}, [items, clampedVisible]);

	const showUnderConstruction = clampedVisible > items.length;
	const canSeeMore = clampedVisible < totalCards;

	return (
		<section id='portfolio' className='portfolio-section'>
			<div className='portfolio-container'>
				<SectionTitle>{t('portfolio.title')}</SectionTitle>

				<div className='portfolio-grid'>
					{visibleProjects.map((item) => (
						<PortfolioCard
							key={item.id ?? item.link ?? item.title}
							title={item.title}
							href={`/${item.link}`}
							imgSrc={`/images/index/projects/${item.img}`}
							imgAlt={t('screenshot_of', { title: item.title })}
						/>
					))}

					{showUnderConstruction && (
						<PortfolioCard
							disabled
							title={t('portfolio.under_construction.title')}
							imgSrc={`/images/index/projects/under_construction_${lang}.png`}
							imgAlt={t('portfolio.under_construction.imgAlt')}
						/>
					)}
				</div>

				{canSeeMore && (
					<SectionButton
						onClick={() => setVisibleCount((c) => c + cardsPerRow)}
						ariaLabel={t('portfolio.see_more_btn')}
					>
						{t('portfolio.see_more_btn')}
					</SectionButton>
				)}
			</div>
		</section>
	);
}
