//! src/layout/Layout.jsx

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.jsx';

export default function Layout() {
	return (
		<div className='w-full min-h-screen bg-[rgb(var(--c-surface))] text-[rgb(var(--c-text))]'>
			<Navbar />

			<main className='mx-auto w-full px-4 py-6'>
				<Outlet />
			</main>
		</div>
	);
}
