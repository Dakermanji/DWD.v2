//! src/components/Auth/AuthModalLayout.jsx

import { useTranslation } from 'react-i18next';

import CloseButton from '../ui/CloseButton';

export default function AuthModalLayout({ title, onClose, children }) {
	const { t } = useTranslation();

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
			<button
				type='button'
				className='absolute inset-0 bg-black/50'
				aria-label={t('layout:common.close')}
				onClick={onClose}
			/>

			<div className='relative flex max-h-[80vh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-[rgb(var(--c-border))] bg-[rgb(var(--c-popover))] shadow-lg'>
				<div className='flex items-center justify-between border-b border-[rgb(var(--c-border))] px-4 py-3'>
					<h2 className='text-base font-semibold text-brand'>
						{title}
					</h2>

					<CloseButton
						onClick={onClose}
						label={t('layout:common.close')}
					/>
				</div>

				<div className='min-h-0 flex-1 overflow-y-auto p-4'>
					{children}
				</div>
			</div>
		</div>
	);
}
