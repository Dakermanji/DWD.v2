//! src/pages/Home/components/PortfolioCard.jsx

import CardTitle from '../../../components/shared/CardTitle.jsx';

export default function PortfolioCard({
	title,
	imgSrc,
	imgAlt,
	href,
	disabled = false,
}) {
	const Wrapper = disabled ? 'div' : 'a';

	return (
		<div className='portfolio-card'>
			<Wrapper
				className={`portfolio-link${disabled ? ' disabled' : ''}`}
				href={disabled ? undefined : href}
				aria-disabled={disabled ? 'true' : undefined}
			>
				<CardTitle title={title} />

				<img
					src={imgSrc}
					alt={imgAlt}
					loading='lazy'
					decoding='async'
				/>
			</Wrapper>
		</div>
	);
}
