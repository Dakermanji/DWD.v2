//! src/components/Shared/DropdownItem.jsx

export default function DropdownItem({
	active = false,
	className = '',
	onClick,
	children,
	...props
}) {
	const cls = ['ui-dditem', className].filter(Boolean).join(' ');

	return (
		<button
			type='button'
			onClick={onClick}
			className={cls}
			data-active={active ? 'true' : 'false'}
			{...props}
		>
			{children}
		</button>
	);
}
