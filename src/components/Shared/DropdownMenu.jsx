//! src/components/Shared/DropdownMenu.jsx

export default function DropdownMenu({ className = '', children }) {
	const cls = ['ui-ddmenu', className].filter(Boolean).join(' ');
	return <div className={cls}>{children}</div>;
}
