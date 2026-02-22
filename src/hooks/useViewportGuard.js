//! src/hooks/useViewportGuard.js

import { useEffect, useState } from 'react';

export default function useViewportGuard() {
	const [blocked, setBlocked] = useState(false);

	useEffect(() => {
		const check = () => {
			const w = window.innerWidth;
			const h = window.innerHeight;
			const remPx = parseFloat(
				getComputedStyle(document.documentElement).fontSize,
			);

			// thresholds (tune as you like)
			const veryLargeText = remPx >= 22; // big accessibility text
			const tinyWidth = w < 340;
			const tinyHeight = h < 500;

			// block only when it’s truly unusable
			setBlocked((veryLargeText && w < 404) || tinyWidth || tinyHeight);
		};

		check();
		window.addEventListener('resize', check);
		return () => window.removeEventListener('resize', check);
	}, []);

	return blocked;
}
