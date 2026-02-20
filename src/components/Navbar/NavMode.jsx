//! src/components/Navbar/NavMode.jsx

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';

export default function NavMode({ vertical = false }) {
	return <ThemeSwitcher vertical={vertical} />;
}
