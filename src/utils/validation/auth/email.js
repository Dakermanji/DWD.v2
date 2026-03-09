//! src/utils/validation/auth/email.js

import isEmail from 'validator/lib/isEmail';

const MAX_EMAIL_LENGTH = 254;

export function normalizeEmail(value = '') {
	return value.trim().toLowerCase();
}

export function validateSignupEmail(value) {
	const normalizedEmail = normalizeEmail(value);

	if (!normalizedEmail) {
		return 'auth.validation.email_required';
	}

	if (normalizedEmail.length > MAX_EMAIL_LENGTH) {
		return 'auth.validation.email_too_long';
	}

	if (!isEmail(normalizedEmail)) {
		return 'auth.validation.email_invalid';
	}

	return '';
}
