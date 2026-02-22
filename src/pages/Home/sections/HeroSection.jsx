//! src/pages/Home/sections/HeroSection.jsx

import { useTranslation, Trans } from 'react-i18next';
import canadaFlag from '../../../assets/index/canada-flag.png';

export default function HeroSection() {
	const { t } = useTranslation('home');

	return (
		<section id='hero'>
			<div className='hero-content'>
				<small className='role'>
					<Trans
						ns='home'
						i18nKey='hero.role'
						components={{
							brand: <span className='brand-letter' />,
						}}
					/>
				</small>

				<h1>
					<Trans
						ns='home'
						i18nKey='hero.intro'
						parent={null}
						components={{
							brand: <span className='brand-letter' />,
							country: <span className='country-with-flag' />,
							flag: (
								<img
									src={canadaFlag}
									alt={t('hero.canadaFlag')}
									className='flag-icon'
									loading='lazy'
									decoding='async'
								/>
							),
						}}
					/>
				</h1>
			</div>
		</section>
	);
}
