//! src/layout/Layout.jsx

import { Outlet } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher.jsx';

export default function Layout() {
	return (
		<div>
			<header
				style={{
					padding: 16,
					display: 'flex',
					justifyContent: 'flex-end',
				}}
			>
				<LanguageSwitcher />
			</header>

			<Outlet />
		</div>
	);
}
