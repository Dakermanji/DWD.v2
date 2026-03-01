//! src/components/LanguageSwitcher/LanguageMenu.jsx

import DropdownMenu from '../ui/DropdownMenu.jsx';
import DropdownItem from '../ui/DropdownItem.jsx';

export default function LanguageMenu({ items, activeCode, onSelect }) {
	return (
		<DropdownMenu>
			{items.map(({ code, label, flag, altFlag }) => (
				<DropdownItem
					key={code}
					active={code === activeCode}
					onClick={() => onSelect(code)}
				>
					<img
						src={flag}
						alt={altFlag || label}
						className='h-5 w-auto rounded-sm'
					/>
					<span>{label}</span>
				</DropdownItem>
			))}
		</DropdownMenu>
	);
}
