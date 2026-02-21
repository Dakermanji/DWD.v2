//! src/pages/Home/hooks/useHomeGlow.js

import { useEffect } from 'react';

export default function useHomeGlow(mainRef) {
	useEffect(() => {
		const main = mainRef.current;
		if (!main) return;

		// Disable on touch / coarse pointer devices
		const isCoarse =
			window.matchMedia?.('(hover: none)').matches ||
			window.matchMedia?.('(pointer: coarse)').matches ||
			'ontouchstart' in window;

		if (isCoarse) return;

		const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

		let rafId = null;

		// speed tracking
		let lastX = null;
		let lastY = null;
		let lastT = null;

		// smoothed intensity
		let currentA = 0.28;

		const MIN_A = 0.18;
		const MAX_A = 0.36;

		const handleMove = (event) => {
			if (rafId) return;

			rafId = requestAnimationFrame(() => {
				const rect = main.getBoundingClientRect();
				const x = event.clientX - rect.left;
				const y = event.clientY - rect.top;

				// percent positions
				const px = clamp((x / rect.width) * 100, 0, 100);
				const py = clamp((y / rect.height) * 100, 0, 100);

				// speed -> intensity
				const now = performance.now();
				let targetA = 0.3;

				if (lastX != null && lastY != null && lastT != null) {
					const dx = x - lastX;
					const dy = y - lastY;
					const dt = Math.max(16, now - lastT);
					const speed = Math.sqrt(dx * dx + dy * dy) / dt; // px/ms

					const speed01 = clamp(speed / 1.2, 0, 1); // "fast" threshold
					const eased = 1 - Math.pow(1 - speed01, 3); // easeOutCubic
					targetA = MIN_A + eased * (MAX_A - MIN_A);
				}

				lastX = x;
				lastY = y;
				lastT = now;

				// smooth spikes
				currentA = currentA + (targetA - currentA) * 0.12;

				main.style.setProperty('--glow-x', `${px}%`);
				main.style.setProperty('--glow-y', `${py}%`);
				main.style.setProperty('--glow-a', currentA.toFixed(3));

				rafId = null;
			});
		};

		const handleLeave = () => {
			main.style.setProperty('--glow-x', '10%');
			main.style.setProperty('--glow-y', '50%');
			main.style.setProperty('--glow-a', '0.3');
			currentA = 0.3;
		};

		main.addEventListener('mousemove', handleMove);
		main.addEventListener('mouseleave', handleLeave);

		return () => {
			if (rafId) cancelAnimationFrame(rafId);
			main.removeEventListener('mousemove', handleMove);
			main.removeEventListener('mouseleave', handleLeave);
		};
	}, [mainRef]);
}
