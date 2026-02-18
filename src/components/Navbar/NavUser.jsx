//! src/components/Navbar/NavUser.jsx

import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, LogOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function NavUser({ vertical = false, onSocial }) {
	const { t } = useTranslation();

	const items = [
		{
			key: 'dashboard',
			label: t('nav.dashboard'),
			icon: LayoutDashboard,
			type: 'link',
			to: '/dashboard',
		},
		{
			key: 'social',
			label: t('nav.social'),
			icon: Users,
			type: 'action',
			onClick: onSocial, // later: open sidebar
		},
		{
			key: 'logout',
			label: t('auth.logout'),
			icon: LogOut,
			type: 'action',
			onClick: () => {
				// later: call logout API
				console.log('logout');
			},
		},
	];

	return (
		<>
			{items.map(({ key, label, icon: Icon, type, to, onClick }) =>
				type === 'link' ? (
					<Link
						key={key}
						to={to}
						title={!vertical ? label : undefined}
						className={`
              flex items-center gap-2 px-2 py-1 rounded-md
              text-sm hover:text-brand hover:bg-gray-100 dark:hover:bg-zinc-900
              transition-colors
              ${!vertical ? 'justify-center' : ''}
            `}
					>
						<Icon size={18} />
						{vertical && <span>{label}</span>}
					</Link>
				) : (
					<button
						key={key}
						type='button'
						onClick={onClick}
						title={!vertical ? label : undefined}
						className={`
              flex items-center gap-2 px-2 py-1 rounded-md
              text-sm hover:text-brand hover:bg-gray-100 dark:hover:bg-zinc-900
              transition-colors
              ${!vertical ? 'justify-center' : ''}
            `}
					>
						<Icon size={18} />
						{vertical && <span>{label}</span>}
					</button>
				),
			)}
		</>
	);
}
