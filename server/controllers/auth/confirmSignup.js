//! server/controllers/auth/confirmSignup.js

import {
	findAuthTokenByHashAndType,
	deleteAuthToken,
} from '../../models/authToken.js';
import { verifyUser } from '../../models/user.js';
import { hashToken } from '../../utils/security/tokens.js';

const confirmSignup = async (req, res) => {
	const { token } = req.query;

	if (!token) {
		return res.redirect('/?error=invalid_token');
	}

	const hashedToken = hashToken(token);

	const tokenRecord = await findAuthTokenByHashAndType(hashedToken, 'signup');

	if (!tokenRecord) {
		return res.redirect('/?error=invalid_token');
	}

	if (tokenRecord.expires_at < new Date()) {
		await deleteAuthToken(tokenRecord.user_id, 'signup');

		return res.redirect('/?error=token_expired');
	}

	await verifyUser(tokenRecord.user_id);
	await deleteAuthToken(tokenRecord.user_id, 'signup');

	req.session.pendingSignupUserId = tokenRecord.user_id;

	return res.redirect('/?modal=complete-signup');
};

export default confirmSignup;
