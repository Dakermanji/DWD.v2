//! src/components/shared/SectionButton.jsx

export default function SectionButton({
	children,
	type = 'button',
	onClick,
	ariaLabel,
	disabled = false,
	className = '',
	wrapperClassName = '',
}) {
	return (
		<div className={`section-btn-wrapper ${wrapperClassName}`.trim()}>
			<button
				type={type}
				onClick={onClick}
				aria-label={ariaLabel}
				disabled={disabled}
				className={`section-btn ${className}`.trim()}
			>
				{children}
			</button>
		</div>
	);
}
