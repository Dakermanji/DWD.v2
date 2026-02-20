//! src/components/Navbar/NavBrand.jsx

import { Link } from 'react-router-dom';
import CompanyName from '../Shared/CompanyName.jsx';

export default function NavBrand() {
	return (
		<Link to='/' className='ui-brand'>
			<CompanyName />
		</Link>
	);
}
