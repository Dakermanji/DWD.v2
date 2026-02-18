//! src/components/Navbar/Navbrand.jsx

import { Link } from 'react-router-dom';
import CompanyName from '../Shared/CompanyName.jsx';

export default function NavBrand() {
	return (
		<Link
			to='/'
			className='font-display font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity'
		>
			<CompanyName />
		</Link>
	);
}
