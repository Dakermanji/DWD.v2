//! src/layout/Layout.jsx

import { Outlet } from 'react-router-dom';

export default function MainLayout() {
	return (
		<div>
			<Outlet />
		</div>
	);
}
