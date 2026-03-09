//! src/components/ui/FormField.jsx

import { cloneElement } from 'react';

export default function FormField({ id, label, hint, error, children }) {
	const hintId = hint ? `${id}-hint` : undefined;
	const errorId = error ? `${id}-error` : undefined;

	const describedBy =
		[hint && !error ? hintId : '', error ? errorId : '']
			.filter(Boolean)
			.join(' ') || undefined;

	const field = cloneElement(children, {
		id,
		'aria-describedby': describedBy,
		'aria-invalid': error ? 'true' : children.props['aria-invalid'],
	});

	return (
		<div className='form-field'>
			<label htmlFor={id}>{label}</label>

			{field}

			{hint && !error && (
				<p id={hintId} className='form-hint'>
					{hint}
				</p>
			)}

			{error && (
				<p id={errorId} className='form-error' role='alert'>
					{error}
				</p>
			)}
		</div>
	);
}
