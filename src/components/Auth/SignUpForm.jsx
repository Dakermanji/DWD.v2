//! src/components/Auth/SignUpForm.jsx

import { useTranslation } from 'react-i18next';

import FormField from '../ui/FormField';
import Input from '../ui/Input';
import ActionButton from '../shared/ActionButton';

export default function SignUpForm() {
	const { t } = useTranslation('home');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className='space-y-4' onSubmit={handleSubmit}>
			<FormField id='auth-email' label={t('auth.email')}>
				<Input name='email' type='email' autoComplete='email' />
			</FormField>

			<ActionButton type='submit' className='w-full'>
				{t('auth.signup_submit')}
			</ActionButton>
		</form>
	);
}
