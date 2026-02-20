//! src/components/Navbar/NavAuth.jsx

import NavUser from './NavUser.jsx';
import NavGuest from './NavGuest.jsx';

export default function NavAuth({ user, vertical = false, onLogin, onSocial }) {
	if (user) return <NavUser vertical={vertical} onSocial={onSocial} />;
	return <NavGuest vertical={vertical} onLogin={onLogin} />;
}
