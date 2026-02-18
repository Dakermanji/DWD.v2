//! src/components/Navbar/NavNotUser.jsx

import { useTranslation } from 'react-i18next';
import { LogIn } from 'lucide-react';

export default function NavNotUser({ vertical = false, onLogin }) {
	const { t } = useTranslation();

	const label = t('auth.login_signup');

	const handleClick = () => {
		if (onLogin) onLogin();
		// later: open modal
	};

	return (
		<button
			type='button'
			onClick={handleClick}
			title={!vertical ? label : undefined}
			className={`
        flex items-center gap-2
        text-sm hover:text-brand transition-colors
        ${!vertical ? 'justify-center' : ''}
      `}
			aria-label={label}
		>
			<LogIn size={18} />
			{vertical && <span>{label}</span>}
		</button>
	);
}
