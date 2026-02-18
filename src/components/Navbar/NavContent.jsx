//! src/components/Navbar/NavLang.jsx

import NavLinks from './NavLinks.jsx';
import NavUser from './NavUser.jsx';
import NavNotUser from './NavNotUser.jsx';
import NavMode from './NavMode.jsx';
import NavLang from './NavLang.jsx';

export default function NavContent({ user, vertical = false }) {
	return (
		<div
			className={`flex ${vertical ? 'flex-col gap-4' : 'items-center gap-6'}`}
		>
			<NavLinks vertical={vertical} />
			{user ? (
				<NavUser vertical={vertical} />
			) : (
				<NavNotUser vertical={vertical} />
			)}

			<NavLang />
			<NavMode />
		</div>
	);
}
