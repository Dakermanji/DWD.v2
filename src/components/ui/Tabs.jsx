//! src/components/ui/Tabs.jsx

export default function Tabs({
	label,
	tabs,
	active,
	onChange,
	className = '',
}) {
	return (
		<div className={className}>
			<div className='ui-tabs' role='tablist' aria-label={label}>
				{tabs.map((tab) => (
					<button
						key={tab.id}
						type='button'
						role='tab'
						aria-selected={active === tab.id}
						className={`ui-tab ${active === tab.id ? 'is-active' : ''}`}
						onClick={() => onChange(tab.id)}
					>
						{tab.label}
					</button>
				))}
			</div>
		</div>
	);
}
