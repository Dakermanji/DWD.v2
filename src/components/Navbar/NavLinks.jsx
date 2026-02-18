//! src/components/Navbar/NavLinks.jsx

import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navBar } from '../../config/navigation.js';

export default function NavLinks() {
	const location = useLocation();
	const { t } = useTranslation();

	// Only show index links on home page
	const links = location.pathname === '/' ? navBar.index : [];

	if (!links.length) return null;

	return (
		<>
			{links.map(({ link, label, icon: Icon }) => (
				<a
					key={link}
					href={link}
					className='flex items-center gap-2 text-sm hover:text-brand transition-colors'
				>
					<Icon size={16} />
					{t(label)}
				</a>
			))}
		</>
	);
}
