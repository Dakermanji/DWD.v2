//! src/components/Navbar/NavAuth.jsx

import NavUser from './NavUser.jsx';
import NavGuest from './NavGuest.jsx';

export default function NavAuth({
	user,
	vertical = false,
	onLogin,
	onSocial,
	onNavigate,
}) {
	if (user)
		return (
			<NavUser
				vertical={vertical}
				onSocial={onSocial}
				onNavigate={onNavigate}
			/>
		);
	return (
		<NavGuest
			vertical={vertical}
			onLogin={onLogin}
			onNavigate={onNavigate}
		/>
	);
}
