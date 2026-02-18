//! src/layout/Layout.jsx

import { Outlet } from 'react-router-dom';
import { Github } from 'lucide-react';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher.jsx';

export default function Layout() {
	return (
		<div className='min-h-screen bg-white text-gray-900'>
			<header className='flex justify-between items-center px-6 py-4 border-b'>
				<div className='flex items-center gap-2 font-semibold'>
					<Github size={20} />
					<span>Dakermanji</span>
				</div>

				<LanguageSwitcher />
			</header>

			<main className='px-6 py-8'>
				<Outlet />
			</main>
		</div>
	);
}
