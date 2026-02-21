//! src/layout/Layout.jsx

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Layout() {
	return (
		<div
			id='top'
			className='min-h-screen flex flex-col bg-[rgb(var(--c-surface))] text-[rgb(var(--c-text))]'
		>
			<Navbar />

			<main className='flex-1 w-full px-4 py-6'>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
