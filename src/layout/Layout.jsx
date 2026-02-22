//! src/layout/Layout.jsx

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import TitleSync from './TitleSync.jsx';
import useViewportGuard from '../hooks/useViewportGuard';
import { useTranslation } from 'react-i18next';

function ViewportBlocked() {
	const { t } = useTranslation();
	return (
		<div className='min-h-screen flex items-center justify-center p-6 text-center'>
			<div className='max-w-md'>
				<h1 className='text-xl font-semibold'>{t('tooSmall.title')}</h1>
				<p className='mt-2 text-sm text-[rgb(var(--c-muted))]'>
					{t('tooSmall.description')}
				</p>
			</div>
		</div>
	);
}

export default function Layout() {
	const blocked = useViewportGuard();

	if (blocked) return <ViewportBlocked />;
	return (
		<>
			<TitleSync />
			<div
				id='top'
				className='min-h-screen flex flex-col bg-[rgb(var(--c-surface))] text-[rgb(var(--c-text))]'
			>
				<Navbar />

				<main className='app-main flex-1 w-full'>
					<Outlet />
				</main>

				<Footer />
			</div>
		</>
	);
}
