//! src/components/Auth/SignInForm.jsx

import { useTranslation } from 'react-i18next';

import FormField from '../ui/FormField';
import Input from '../ui/Input';
import ActionButton from '../shared/ActionButton';

export default function SignInForm() {
	const { t } = useTranslation('home');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className='space-y-4' onSubmit={handleSubmit}>
			<FormField id='auth-identifier' label={t('auth.identifier')}>
				<Input name='identifier' type='text' autoComplete='username' />
			</FormField>

			<FormField id='auth-password' label={t('auth.password')}>
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
	);
}
