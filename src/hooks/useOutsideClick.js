//! src/hooks/useOutsideClick.js

import { useEffect } from 'react';

export default function useOutsideClick(ref, onOutside, when = true) {
	useEffect(() => {
		if (!when) return;

		function handler(e) {
			if (!ref.current) return;
			if (!ref.current.contains(e.target)) onOutside?.(e);
		}

		document.addEventListener('mousedown', handler);
		return () => document.removeEventListener('mousedown', handler);
	}, [ref, onOutside, when]);
}
