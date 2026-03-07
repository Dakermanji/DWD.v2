//! src/components/Auth/AuthModal.jsx

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Tabs from '../ui/Tabs';

import AuthModalLayout from './AuthModalLayout';
import AuthOAuth from './AuthOAuth';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import useAuthModalEffects from './hooks/useAuthModalEffects';

export default function AuthModal({ open, onClose, initialTab = 'signin' }) {
	const { t } = useTranslation('home');
	const [tab, setTab] = useState(initialTab);

	const handleClose = () => {
		setTab(initialTab);
		onClose?.();
	};

	useAuthModalEffects({
		open,
		onClose: () => {
			setTab(initialTab);
			onClose?.();
		},
	});

	if (!open) return null;

	const title = tab === 'signin' ? t('auth.signin') : t('auth.signup');

	return (
		<AuthModalLayout title={title} onClose={handleClose}>
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
				<AuthOAuth />

				<div className='text-center text-sm text-[rgb(var(--c-muted))]'>
					{t('auth.or')}
				</div>

				{tab === 'signin' ? <SignInForm /> : <SignUpForm />}
			</div>
		</AuthModalLayout>
	);
}
