//! src/components/Auth/AuthModal.jsx

import { useEffect, useState } from 'react';
import Tabs from '../ui/Tabs';
import CloseButton from '../ui/CloseButton';

export default function AuthModal({ open, onClose }) {
	const [tab, setTab] = useState('signin');

	const handleClose = () => {
		setTab('signin');
		onClose?.();
	};

	useEffect(() => {
		if (!open) return;

		const onKeyDown = (e) => {
			if (e.key === 'Escape') handleClose();
		};

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open]);

	useEffect(() => {
		if (!open) return;

		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	if (!open) return null;

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
			<button
				type='button'
				className='absolute inset-0 bg-black/50'
				aria-label='Close'
				onClick={handleClose}
			/>

			<div className='relative flex flex-col w-full max-w-md max-h-[80vh] overflow-hidden rounded-2xl border border-[rgb(var(--c-border))] bg-[rgb(var(--c-popover))] shadow-lg'>
				<div className='flex items-center justify-between border-b border-[rgb(var(--c-border))] px-4 py-3'>
					<h2 className='text-base font-semibold text-[rgb(var(--c-text))]'>
						{tab === 'signin' ? 'Sign in' : 'Sign up'}
					</h2>

					<CloseButton onClick={handleClose} />
				</div>

				<div className='min-h-0 flex-1 overflow-y-auto p-4'>
					<Tabs
						label='Authentication'
						tabs={[
							{ id: 'signin', label: 'Sign in' },
							{ id: 'signup', label: 'Sign up' },
						]}
						active={tab}
						onChange={setTab}
					/>

					{/* Placeholder content for now */}
					<div className='mt-4 rounded-md border border-[rgb(var(--c-border))] bg-[rgb(var(--c-surface))] p-4 text-sm text-[rgb(var(--c-muted))]'>
						Auth form goes here later…
					</div>
				</div>
			</div>
		</div>
	);
}
