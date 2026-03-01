//! src/components/Navbar/NavMode.jsx

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';

export default function NavMode({ vertical = false, onDone }) {
	return <ThemeSwitcher vertical={vertical} onDone={onDone} />;
}
