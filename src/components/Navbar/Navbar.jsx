//! src/components/Navbar/Navbar.jsx

import { useState } from 'react';
import NavBrand from './NavBrand.jsx';
import NavContent from './NavContent.jsx';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	const user = false; // placeholder until auth is added

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
					<div className='hidden md:block'>
						<NavContent user={user} />
					</div>
				</div>

				{/* Mobile Menu */}
				{open && (
					<div className='md:hidden py-4'>
						<NavContent user={user} vertical />
					</div>
				)}
			</div>
		</nav>
	);
}
