//! src/components/Navbar/Navbar.jsx

import { useState } from 'react';
import NavBrand from './NavBrand.jsx';
import NavLinks from './NavLinks.jsx';
import NavUser from './NavUser.jsx';
import NavNotUser from './NavNotUser.jsx';
import NavMode from './NavMode.jsx';
import NavLang from './NavLang.jsx';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	const user = null; // placeholder until auth is added

	return (
		<nav className='border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950'>
			<div className='max-w-6xl mx-auto px-6'>
				<div className='flex items-center justify-between h-16'>
					<NavBrand />

					{/* Mobile Toggle */}
					<button
						className='md:hidden icon-btn'
						onClick={() => setOpen(!open)}
						aria-label='Toggle navigation'
					>
						☰
					</button>

					{/* Desktop */}
					<div className='hidden md:flex items-center gap-6'>
						<NavLinks />
						{user ? <NavUser /> : <NavNotUser />}
						<NavLang />
					</div>
				</div>

				{/* Mobile Menu */}
				{open && (
					<div className='md:hidden flex flex-col gap-4 py-4'>
						<NavLinks />
						{user ? <NavUser /> : <NavNotUser />}
						<NavMode />
						<NavLang />
					</div>
				)}
			</div>
		</nav>
	);
}
