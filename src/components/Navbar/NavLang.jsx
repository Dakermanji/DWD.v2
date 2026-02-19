//! src/components/Navbar/NavLang.jsx

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';

export default function NavLang({ vertical = false }) {
	return <LanguageSwitcher vertical={vertical} />;
}
