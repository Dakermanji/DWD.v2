//! src/router/index.jsx

import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layout/Layout';
import HomePage from '../pages/Home/HomePage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
				handle: { titleKey: 'home:title' },
			},
		],
	},
]);
