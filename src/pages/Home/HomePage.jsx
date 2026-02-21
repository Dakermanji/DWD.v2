//! src/pages/Home/HomePage.jsx

import { useRef } from 'react';
import '../../styles/home/main.css';
import useHomeGlow from './hooks/useHomeGlow';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';

export default function HomePage() {
	const mainRef = useRef(null);

	useHomeGlow(mainRef);

	return (
		<main id='home-page' ref={mainRef}>
			<div className='background-overlay' />
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<PortfolioSection />
			<ContactSection />
		</main>
	);
}
