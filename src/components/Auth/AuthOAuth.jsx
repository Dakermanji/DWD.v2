//! src/components/Auth/AuthOAuth.jsx

import { useTranslation } from 'react-i18next';

import OAuthButton from '../ui/OAuthButton';

export default function AuthOAuth() {
	const { t } = useTranslation('home');

	return (
		<div className='space-y-2'>
			<OAuthButton provider='google' onClick={() => {}}>
				{t('auth.continue_google')}
			</OAuthButton>

			<OAuthButton provider='github' onClick={() => {}}>
				{t('auth.continue_github')}
			</OAuthButton>
		</div>
	);
}
