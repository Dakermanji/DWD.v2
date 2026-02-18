//! src/components/Navbar/NavLinks.jsx

import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navBar } from '../../config/navigation.js';

export default function NavLinks({ vertical = false }) {
	const location = useLocation();
	const { t } = useTranslation();

	const links = location.pathname === '/' ? navBar.index : [];

	if (!links.length) return null;

	return (
		<>
			{links.map(({ link, label, icon: Icon }) => (
				<a
					key={link}
					href={link}
					title={!vertical ? t(label) : undefined} // Tooltip on desktop
					className={`
							flex items-center gap-2
							px-2 py-1 rounded-md
							text-sm hover:text-brand hover:bg-gray-100 dark:hover:bg-zinc-900
							transition-colors
							${!vertical ? 'justify-center' : ''}
							`}
				>
					<Icon size={18} />
					{vertical && <span>{t(label)}</span>}
				</a>
			))}
		</>
	);
}
