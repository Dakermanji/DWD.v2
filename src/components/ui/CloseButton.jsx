//! src/components/ui/CloseButton.jsx

import { X } from 'lucide-react';

export default function CloseButton({
	onClick,
	label = 'Close',
	size = 18,
	className = '',
}) {
	return (
		<button
			type='button'
			aria-label={label}
			onClick={onClick}
			className={`icon-btn p-2 ${className}`.trim()}
		>
			<X size={size} />
		</button>
	);
}
