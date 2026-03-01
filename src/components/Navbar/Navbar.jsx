//! src/components/Navbar/Navbar.jsx

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import NavBrand from './NavBrand.jsx';
import NavContent from './NavContent.jsx';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	const user = false; // placeholder until auth is added
	const { t } = useTranslation();

	const closeMenu = () => setOpen(false);

	return (
		<nav className='ui-navbar'>
			<div className='ui-navbar-inner'>
				<div className='ui-navbar-row'>
					<NavBrand />

					<button
						className='md:hidden icon-btn p-2 rounded-md transition hover:bg-[rgb(var(--c-hover))] active:bg-[rgb(var(--c-active))]'
						onClick={() => setOpen(!open)}
						aria-label={t('nav.toggle')}
					>
						{open ? (
							<X size={22} strokeWidth={1.8} />
						) : (
							<Menu size={22} strokeWidth={1.8} />
						)}
					</button>

					<div className='hidden md:block'>
						<NavContent user={user} />
					</div>
				</div>

				{/* Mobile Backdrop (click outside closes) */}
				{open && (
					<button
						type='button'
						className='ui-navbar-backdrop md:hidden'
						aria-label={t('nav.toggle')}
						onClick={closeMenu}
					/>
				)}

				{/* Mobile Menu */}
				{open && (
					<div className='md:hidden ui-navbar-mobile'>
						<NavContent user={user} vertical onClose={closeMenu} />
					</div>
				)}
			</div>
		</nav>
	);
}
