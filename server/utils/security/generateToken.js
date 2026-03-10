//! server/utils/security/generateToken.js

import crypto from 'crypto';

export const generateToken = ({ bytes = 32, ttlMinutes = 30 } = {}) => {
	const rawToken = crypto.randomBytes(bytes).toString('hex');

	const hashedToken = crypto
		.createHash('sha256')
		.update(rawToken)
		.digest('hex');

	const expiresAt = new Date(Date.now() + ttlMinutes * 60 * 1000);

	return {
		rawToken,
		hashedToken,
		expiresAt,
	};
};
