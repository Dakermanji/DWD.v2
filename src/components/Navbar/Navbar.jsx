//! src/components/Navbar/Navbar.jsx

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import NavBrand from './NavBrand.jsx';
import NavContent from './NavContent.jsx';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	const user = false; // placeholder until auth is added
	const { t } = useTranslation();

	return (
		<nav className='ui-navbar'>
			<div className='ui-navbar-inner'>
				<div className='ui-navbar-row'>
					<NavBrand />

					{/* Mobile Toggle */}
					<button
						className='md:hidden icon-btn'
						onClick={() => setOpen(!open)}
						aria-label={t('nav.toggle')}
					>
						☰
					</button>

					{/* Desktop */}
					<div className='hidden md:block'>
						<NavContent user={user} />
					</div>
				</div>

				{/* Mobile Menu */}
				{open && (
					<div className='md:hidden ui-navbar-mobile'>
						<NavContent user={user} vertical />
					</div>
				)}
			</div>
		</nav>
	);
}
