//! src/components/Navbar/NavLinks.jsx

import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navBar } from '../../config/navigation.js';

function isHashLink(link) {
	return typeof link === 'string' && link.startsWith('#');
}

function isExternalLink(link) {
	return typeof link === 'string' && /^https?:\/\//i.test(link);
}

export default function NavLinks({ vertical = false }) {
	const location = useLocation();
	const { t } = useTranslation();

	const links = location.pathname === '/' ? navBar.index : [];
	if (!links.length) return null;

	const cls = `ui-navlink ${!vertical ? 'ui-navlink--center' : ''}`;

	return (
		<>
			{links.map(({ link, label, icon: Icon }) => {
				const commonProps = {
					title: !vertical ? t(label) : undefined,
					className: cls,
				};

				// #section (in-page)
				if (isHashLink(link)) {
					return (
						<a key={link} href={link} {...commonProps}>
							<Icon size={18} />
							{vertical && <span>{t(label)}</span>}
						</a>
					);
				}

				// external (optional safety)
				if (isExternalLink(link)) {
					return (
						<a
							key={link}
							href={link}
							target='_blank'
							rel='noreferrer'
							{...commonProps}
						>
							<Icon size={18} />
							{vertical && <span>{t(label)}</span>}
						</a>
					);
				}

				// internal route (./aaa/bbb or /aaa/bbb)
				return (
					<Link
						key={link}
						to={link}
						title={!vertical ? t(label) : undefined}
						className={cls}
					>
						<Icon size={18} />
						{vertical && <span>{t(label)}</span>}
					</Link>
				);
			})}
		</>
	);
}
