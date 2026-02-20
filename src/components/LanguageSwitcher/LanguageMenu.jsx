//! src/components/LanguageSwitcher/LanguageMenu.jsx

export default function LanguageMenu({ items, activeCode, onSelect }) {
	return (
		<div className='ui-ddmenu'>
			{items.map(({ code, label, flag, altFlag }) => {
				const active = code === activeCode;

				return (
					<button
						key={code}
						type='button'
						onClick={() => onSelect(code)}
						className='ui-dditem'
						data-active={active ? 'true' : 'false'}
					>
						<img
							src={flag}
							alt={altFlag || label}
							className='h-5 w-auto rounded-sm'
						/>
						<span>{label}</span>
					</button>
				);
			})}
		</div>
	);
}
