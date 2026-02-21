//! src/pages/Home/HomePage.jsx

import { useTranslation } from 'react-i18next';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';
import '../../styles/home/main.css';

export default function HomePage() {
	const { t } = useTranslation();

	return (
		<main id='home-page' style={{ padding: 24 }}>
			<div className='background-overlay' />
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<PortfolioSection />
			<ContactSection />
		</main>
	);
}
