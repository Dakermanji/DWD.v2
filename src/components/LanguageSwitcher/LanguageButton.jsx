//! src/components/LanguageSwitcher/LanguageButton.jsx

export default function LanguageButton({ current, onClick, title, ariaLabel }) {
	return (
		<button
			type='button'
			onClick={onClick}
			aria-label={ariaLabel}
			title={title}
			className='nav-icon-btn ui-ddbtn ui-langbtn'
		>
			<img
				src={current.flag}
				alt={current.altFlag || current.label}
				className='h-6 w-auto'
			/>
		</button>
	);
}
