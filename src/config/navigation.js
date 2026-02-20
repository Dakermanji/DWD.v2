//! src/config/navigation.js

import {
	User,
	Boxes,
	Briefcase,
	Phone,
	LayoutDashboard,
	Users,
	LogOut,
	LogIn,
} from 'lucide-react';

export const navBar = {
	index: [
		{ link: '#about', label: 'nav.about', icon: User },
		{ link: '#services', label: 'nav.services', icon: Boxes },
		{ link: '#portfolio', label: 'nav.portfolio', icon: Briefcase },
		{ link: '#contact', label: 'nav.contact', icon: Phone },
	],

	// items for logged-in users in the top navbar
	user: [
		{
			key: 'dashboard',
			type: 'link',
			to: '/dashboard',
			label: 'nav.dashboard',
			icon: LayoutDashboard,
		},
		{
			key: 'social',
			type: 'action',
			action: 'social',
			label: 'nav.social',
			icon: Users,
		},
		{
			key: 'logout',
			type: 'action',
			action: 'logout',
			label: 'auth.logout',
			icon: LogOut,
		},
	],

	guest: [
		{
			key: 'login',
			type: 'action',
			action: 'login',
			label: 'auth.login_signup',
			icon: LogIn,
		},
	],

	dashboard: [],
};
