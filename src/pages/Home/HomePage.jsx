//! src/pages/Home/HomePage.jsx

import { useTranslation } from 'react-i18next';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';

export default function HomePage() {
	const { t } = useTranslation();

	return (
		<main style={{ padding: 24 }}>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<PortfolioSection />
			<ContactSection />
		</main>
	);
}
