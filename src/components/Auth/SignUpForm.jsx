//! src/components/Auth/SignUpForm.jsx

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import FormField from '../ui/FormField';
import Input from '../ui/Input';
import ActionButton from '../shared/ActionButton';

import {
	normalizeEmail,
	validateSignupEmail,
} from '../../utils/validation/auth/email';

export default function SignUpForm() {
	const { t } = useTranslation('home');

	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const validateEmailField = (value) => {
		const errorKey = validateSignupEmail(value);
		setEmailError(errorKey);
		return !errorKey;
	};

	const handleChange = (e) => {
		const nextEmail = e.target.value;
		setEmail(nextEmail);

		if (isTouched) {
			validateEmailField(nextEmail);
		}
	};

	const handleBlur = () => {
		setIsTouched(true);
		validateEmailField(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setIsTouched(true);

		const isValid = validateEmailField(email);
		if (!isValid) return;

		const normalizedEmail = normalizeEmail(email);

		console.log('Signup email ready to submit:', normalizedEmail);

		// later:
		// submitSignupEmail({ email: normalizedEmail });
	};

	return (
		<form noValidate onSubmit={handleSubmit}>
			<FormField
				id='auth-signup-email'
				label={t('auth.email')}
				error={emailError ? t(emailError) : ''}
			>
				<Input
					name='email'
					type='email'
					autoComplete='email'
					inputMode='email'
					dir='ltr'
					value={email}
					onChange={handleChange}
					onBlur={handleBlur}
					aria-invalid={emailError ? 'true' : 'false'}
				/>
			</FormField>

			<ActionButton type='submit'>{t('auth.signup_submit')}</ActionButton>
		</form>
	);
}
