//! src/components/Navbar/NavUser.jsx

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navBar } from '../../config/navigation.js';

export default function NavUser({ vertical = false, onSocial }) {
	const { t } = useTranslation();

	const linkClass = `ui-navlink ${!vertical ? 'ui-navlink--center' : ''}`;
	const actionClass = `ui-navaction ${!vertical ? 'ui-navlink--center' : ''}`;

	function handleAction(action) {
		if (action === 'social') return onSocial?.();
		if (action === 'logout') {
			// later: call logout API
			console.log('logout');
		}
	}

	return (
		<>
			{navBar.user.map(({ key, type, to, action, label, icon: Icon }) =>
				type === 'link' ? (
					<Link
						key={key}
						to={to}
						title={!vertical ? t(label) : undefined}
						className={linkClass}
					>
						<Icon size={18} />
						{vertical && <span>{t(label)}</span>}
					</Link>
				) : (
					<button
						key={key}
						type='button'
						title={!vertical ? t(label) : undefined}
						className={actionClass}
						onClick={() => handleAction(action)}
					>
						<Icon size={18} />
						{vertical && <span>{t(label)}</span>}
					</button>
				),
			)}
		</>
	);
}
