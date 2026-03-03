//! src/pages/Home/hooks/useCardsPerRow.js

import { useEffect, useState } from 'react';

function getCardsPerRow() {
	// Keep in sync with your CSS breakpoints
	if (window.matchMedia('(min-width: 1024px)').matches) return 3; // lg
	if (window.matchMedia('(min-width: 768px)').matches) return 2; // md
	return 1;
}

export default function useCardsPerRow() {
	const [cardsPerRow, setCardsPerRow] = useState(0);

	useEffect(() => {
		const update = () => setCardsPerRow(getCardsPerRow());

		update();

		const mqLg = window.matchMedia('(min-width: 1024px)');
		const mqMd = window.matchMedia('(min-width: 768px)');

		const onChange = () => update();

		// Modern browsers
		mqLg.addEventListener?.('change', onChange);
		mqMd.addEventListener?.('change', onChange);

		// Safari fallback
		mqLg.addListener?.(onChange);
		mqMd.addListener?.(onChange);

		window.addEventListener('resize', onChange);

		return () => {
			mqLg.removeEventListener?.('change', onChange);
			mqMd.removeEventListener?.('change', onChange);
			mqLg.removeListener?.(onChange);
			mqMd.removeListener?.(onChange);
			window.removeEventListener('resize', onChange);
		};
	}, []);

	return cardsPerRow;
}
