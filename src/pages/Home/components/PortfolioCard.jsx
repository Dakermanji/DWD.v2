//! src/pages/Home/components/PortfolioCard.jsx

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
				<h4 className='portfolio-title'>{title}</h4>

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
