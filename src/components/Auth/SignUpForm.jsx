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
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [serverError, setServerError] = useState('');
	const [serverSuccess, setServerSuccess] = useState('');

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

	const handleSubmit = async (e) => {
		e.preventDefault();

		setIsTouched(true);
		setServerError('');
		setServerSuccess('');

		const isValid = validateEmailField(email);
		if (!isValid) return;

		const normalizedEmail = normalizeEmail(email);

		try {
			setIsSubmitting(true);

			const response = await fetch('/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify({
					email: normalizedEmail,
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				setServerError(data.message || 'auth.server_error');
				return;
			}

			setServerSuccess(data.message || 'auth.signup_email_sent');
			setEmail('');
			setIsTouched(false);
			setEmailError('');
		} catch {
			setServerError('auth.server_error');
		} finally {
			setIsSubmitting(false);
		}
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

			{serverError && <p className='form-error'>{t(serverError)}</p>}
			{serverSuccess && (
				<p className='form-success'>{t(serverSuccess)}</p>
			)}

			<ActionButton type='submit' disabled={isSubmitting}>
				{isSubmitting
					? t('layout:common.loading')
					: t('auth.signup_submit')}
			</ActionButton>
		</form>
	);
}
