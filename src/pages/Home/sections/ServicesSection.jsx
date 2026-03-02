//! src/pages/Home/sections/ServicesSection.jsx

import { useTranslation } from 'react-i18next';
import { Workflow, Database, Braces } from 'lucide-react';

const ICONS = {
	workflow: Workflow,
	database: Database,
	braces: Braces,
};

export default function ServicesSection() {
	const { t } = useTranslation('home');

	const services = t('services.items', { returnObjects: true }) || [];

	return (
		<section id='services' className='services-section'>
			<div className='services-container'>
				<h2 className='section-title'>{t('services.title')}</h2>

				<div className='services-grid'>
					{Array.isArray(services) &&
						services.map((service, index) => {
							const Icon = ICONS[service.icon] ?? Workflow;

							return (
								<div key={index} className='service-card'>
									<div
										className='service-icon'
										aria-hidden='true'
									>
										<Icon />
									</div>

									<h3 className='service-card-title'>
										{service.title}
									</h3>
									<p className='service-card-description'>
										{service.description}
									</p>
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
}
