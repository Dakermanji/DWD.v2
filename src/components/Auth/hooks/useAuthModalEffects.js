//! src/components/Auth/hooks/useAuthModalEffects.js

import { useEffect } from 'react';

export default function useAuthModalEffects({ open, onClose }) {
	useEffect(() => {
		if (!open) return;

		const handleKeyDown = (e) => {
			if (e.key === 'Escape') onClose?.();
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [open, onClose]);

	useEffect(() => {
		if (!open) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [open]);
}
