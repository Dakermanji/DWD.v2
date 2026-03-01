//! src/pages/Home/sections/AboutSection.jsx

import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const tabsOrder = ['experience', 'skills', 'education'];

export default function AboutSection() {
	const { t } = useTranslation('home');
	const [activeTab, setActiveTab] = useState('experience');

	const description = t('about.description', { returnObjects: true });
	const tabTitles = t('about.tabs.titles', { returnObjects: true });

	const tabs = useMemo(
		() => tabsOrder.map((id) => ({ id, label: tabTitles?.[id] ?? id })),
		[tabTitles],
	);

	const items = t(`about.tabs.${activeTab}`, { returnObjects: true });

	return (
		<section id='about' aria-label={t('about.title')}>
			<div className='container'>
				<h2 className='section-title'>{t('about.title')}</h2>

				<div className='about-grid'>
					{/* Left */}
					<div className='about-media'>
						<img
							src='/images/index/humanoid-robot.png'
							alt={t('about.image')}
							loading='lazy'
							decoding='async'
						/>
					</div>

					{/* Right */}
					<div className='about-card'>
						<div className='about-description'>
							{Array.isArray(description) &&
								description.map((p, i) => <p key={i}>{p}</p>)}
						</div>

						<div
							className='about-tabs'
							role='tablist'
							aria-label={t('about.title')}
						>
							{tabs.map((tab) => (
								<button
									key={tab.id}
									type='button'
									role='tab'
									aria-selected={activeTab === tab.id}
									className={`about-tab ${activeTab === tab.id ? 'is-active' : ''}`}
									onClick={() => setActiveTab(tab.id)}
								>
									{tab.label}
								</button>
							))}
						</div>

						<div className='about-panel' role='tabpanel'>
							{activeTab === 'experience' && (
								<ExperienceList items={items} />
							)}
							{activeTab === 'skills' && (
								<SkillsList items={items} />
							)}
							{activeTab === 'education' && (
								<EducationList items={items} />
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function ExperienceList({ items }) {
	if (!Array.isArray(items)) return null;

	return (
		<ul className='about-list'>
			{items.map((item, i) => (
				<li key={i} className='about-item'>
					<span className='about-kicker'>{item.period}</span>
					<div
						className='about-main'
						dangerouslySetInnerHTML={{ __html: item.role_company }}
					/>
					{item.location && (
						<address className='about-meta'>
							{item.location}
						</address>
					)}
				</li>
			))}
		</ul>
	);
}

function SkillsList({ items }) {
	if (!Array.isArray(items)) return null;

	return (
		<ul className='about-list'>
			{items.map((skill, i) => (
				<li key={i} className='about-item'>
					<span className='about-kicker'>{skill.name}</span>
					<div className='about-main'>{skill.description}</div>
				</li>
			))}
		</ul>
	);
}

function EducationList({ items }) {
	if (!Array.isArray(items)) return null;

	return (
		<ul className='about-list'>
			{items.map((edu, i) => (
				<li key={i} className='about-item'>
					<span className='about-kicker'>{edu.year}</span>
					<div className='about-main'>{edu.title}</div>
					{edu.institution && (
						<address className='about-meta'>
							{edu.institution}
						</address>
					)}
				</li>
			))}
		</ul>
	);
}
