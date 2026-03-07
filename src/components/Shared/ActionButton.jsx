//! src/components/shared/ActionButton.jsx

export default function ActionButton({
	children,
	type = 'button',
	onClick,
	ariaLabel,
	disabled = false,
	className = '',
	wrapperClassName = '',
	...props
}) {
	return (
		<div className={`action-btn-wrapper ${wrapperClassName}`.trim()}>
			<button
				type={type}
				onClick={onClick}
				aria-label={ariaLabel}
				disabled={disabled}
				className={`action-btn ${className}`.trim()}
				{...props}
			>
				{children}
			</button>
		</div>
	);
}
