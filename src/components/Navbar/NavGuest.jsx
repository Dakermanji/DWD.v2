//! src/components/Navbar/NavGuest.jsx

import { useTranslation } from 'react-i18next';
import { navBar } from '../../config/navigation.js';

export default function NavGuest({ vertical = false, onLogin }) {
	const { t } = useTranslation();

	const actionClass = `ui-navaction ${!vertical ? 'ui-navlink--center' : ''}`;

	function handleAction(action) {
		if (action === 'login') onLogin?.();
	}

	return (
		<>
			{navBar.guest.map(({ key, action, label, icon: Icon }) => (
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
			))}
		</>
	);
}
