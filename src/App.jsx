//! src/App.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layout/Layout.jsx';
import HomePage from './pages/Home/HomePage.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [{ index: true, element: <HomePage /> }],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
