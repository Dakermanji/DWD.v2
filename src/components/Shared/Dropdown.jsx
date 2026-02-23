//! src/components/Shared/Dropdown.jsx

import { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick.js';

export default function Dropdown({ isRtl, button, children }) {
	const [open, setOpen] = useState(false);
	const wrapRef = useRef(null);

	useOutsideClick(wrapRef, () => setOpen(false), open);

	function toggle() {
		setOpen((v) => !v);
	}

	function close() {
		setOpen(false);
	}

	return (
		<div
			ref={wrapRef}
			className='ui-dd'
			data-rtl={isRtl ? 'true' : 'false'}
		>
			{button({ open, toggle, close })}
			{open && children({ close })}
		</div>
	);
}
