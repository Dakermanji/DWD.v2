//! src/components/Navbar/NavContent.jsx

import NavLinks from './NavLinks.jsx';
import NavAuth from './NavAuth.jsx';
import NavMode from './NavMode.jsx';
import NavLang from './NavLang.jsx';

export default function NavContent({ user, vertical = false, onClose }) {
	const layoutClass = vertical ? 'ui-navcontent--col' : 'ui-navcontent--row';
	const cls = vertical ? 'ui-navtools' : 'flex items-center gap-2';

	return (
		<div className={`ui-navcontent ${layoutClass}`}>
			<NavLinks vertical={vertical} onNavigate={onClose} />
			<NavAuth user={user} vertical={vertical} onNavigate={onClose} />

			<div className={cls}>
				<NavLang vertical={vertical} onDone={onClose} />
				<NavMode vertical={vertical} onDone={onClose} />
			</div>
		</div>
	);
}
