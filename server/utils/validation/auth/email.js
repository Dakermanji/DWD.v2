//! server/utils/validation/auth/email.js

import isEmail from 'validator/lib/isEmail.js';

const MAX_EMAIL_LENGTH = 254;

export const normalizeEmail = (value = '') => {
	return value.trim().toLowerCase();
};

export const validateSignupEmail = (value) => {
	const email = normalizeEmail(value);

	if (!email) {
		return 'flash.auth.email_required';
	}

	if (email.length > MAX_EMAIL_LENGTH) {
		return 'flash.auth.email_too_long';
	}

	if (!isEmail(email)) {
		return 'flash.auth.invalid_email';
	}

	return null;
};
