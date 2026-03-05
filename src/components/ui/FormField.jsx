//! src/components/ui/FormField.jsx

import { cloneElement } from 'react';

export default function FormField({ id, label, hint, error, children }) {
	const field = cloneElement(children, { id });

	return (
		<label htmlFor={id} className='block'>
			<span className='mb-1 block text-sm font-medium text-[rgb(var(--c-text))]'>
				{label}
			</span>

			{field}

			{hint && !error && (
				<span className='mt-1 block text-xs text-[rgb(var(--c-muted))]'>
					{hint}
				</span>
			)}

			{error && (
				<span className='mt-1 block text-xs text-red-600'>{error}</span>
			)}
		</label>
	);
}
