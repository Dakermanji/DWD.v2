//! src/layout/Layout.jsx

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.jsx';

export default function Layout() {
	return (
		<div className='min-h-screen bg-white text-gray-900 dark:bg-zinc-950 dark:text-zinc-100'>
			<header className='flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-zinc-800'>
				<div className='flex items-center gap-3'>
					<Navbar />
				</div>
			</header>

			<main className='px-6 py-8'>
				<Outlet />
			</main>
		</div>
	);
}
