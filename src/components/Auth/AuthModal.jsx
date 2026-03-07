//! src/components/Auth/AuthModal.jsx

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Tabs from '../ui/Tabs';
import CloseButton from '../ui/CloseButton';
import FormField from '../ui/FormField';
import Input from '../ui/Input';
import OAuthButton from '../ui/OAuthButton';
import ActionButton from '../shared/ActionButton';

export default function AuthModal({ open, onClose, initialTab = 'signin' }) {
	const { t } = useTranslation('home');
	const [tab, setTab] = useState(initialTab);

	const handleClose = () => {
		setTab(initialTab);
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

	useEffect(() => {
		if (open) setTab(initialTab);
	}, [open, initialTab]);

	if (!open) return null;

	const title = tab === 'signin' ? t('auth.signin') : t('auth.signup');

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
			<button
				type='button'
				className='absolute inset-0 bg-black/50'
				aria-label={t('layout:common.close')}
				onClick={handleClose}
			/>

			<div className='relative flex w-full max-w-md max-h-[80vh] flex-col overflow-hidden rounded-2xl border border-[rgb(var(--c-border))] bg-[rgb(var(--c-popover))] shadow-lg'>
				<div className='flex items-center justify-between border-b border-[rgb(var(--c-border))] px-4 py-3'>
					<h2 className='text-base font-semibold text-brand'>
						{title}
					</h2>

					<CloseButton
						onClick={handleClose}
						label={t('layout:common.close')}
					/>
				</div>

				<div className='min-h-0 flex-1 overflow-y-auto p-4'>
					<Tabs
						label={t('auth.title')}
						tabs={[
							{ id: 'signin', label: t('auth.signin') },
							{ id: 'signup', label: t('auth.signup') },
						]}
						active={tab}
						onChange={setTab}
					/>

					<div className='mt-4 space-y-4'>
						<div className='space-y-2'>
							<OAuthButton provider='google' onClick={() => {}}>
								{t('auth.continue_google')}
							</OAuthButton>

							<OAuthButton provider='github' onClick={() => {}}>
								{t('auth.continue_github')}
							</OAuthButton>
						</div>
						<div className='text-center text-sm text-[rgb(var(--c-muted))]'>
							{t('auth.or')}
						</div>
						{tab === 'signin' ? (
							<form
								className='space-y-4'
								onSubmit={(e) => e.preventDefault()}
							>
								<FormField
									id='auth-identifier'
									label={t('auth.identifier')}
								>
									<Input
										name='identifier'
										type='text'
										autoComplete='username'
									/>
								</FormField>

								<FormField
									id='auth-password'
									label={t('auth.password')}
								>
									<Input
										name='password'
										type='password'
										autoComplete='current-password'
									/>
								</FormField>

								<ActionButton type='submit' className='w-full'>
									{t('auth.signin_submit')}
								</ActionButton>
							</form>
						) : (
							<form
								className='space-y-4'
								onSubmit={(e) => e.preventDefault()}
							>
								<FormField
									id='auth-email'
									label={t('auth.email')}
								>
									<Input
										name='email'
										type='email'
										autoComplete='email'
									/>
								</FormField>
								<ActionButton type='submit' className='w-full'>
									{t('auth.signup_submit')}
								</ActionButton>
							</form>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
