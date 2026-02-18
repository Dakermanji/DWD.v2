import { User, Boxes, Briefcase, Phone } from 'lucide-react';

export const navBar = {
	index: [
		{
			link: '#about',
			label: 'nav.about',
			icon: User,
		},
		{
			link: '#services',
			label: 'nav.services',
			icon: Boxes,
		},
		{
			link: '#portfolio',
			label: 'nav.portfolio',
			icon: Briefcase,
		},
		{
			link: '#contact',
			label: 'nav.contact',
			icon: Phone,
		},
	],
	dashboard: [],
};
