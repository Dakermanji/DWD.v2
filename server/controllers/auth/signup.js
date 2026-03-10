//! server/controllers/auth/signup.js

import { findUserByEmail, createPendingUser } from '../../models/user.js';
import { createAuthToken } from '../../models/authToken.js';
import { generateToken } from '../../utils/security/tokens.js';
import sendSignupEmail from '../../utils/mail/sendSignupEmail.js';
import { delay } from '../../utils/time/timers.js';

const getRandomDelayMs = (min = 1000, max = 5000) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const requestSignup = async (req, res) => {
	const { email } = req.body;
	const lang = 'en';

	try {
		let user = await findUserByEmail(email);

		if (user) {
			await delay(getRandomDelayMs());
			return res.json({
				message: 'auth.signup_email_sent',
			});
		}

		user = await createPendingUser(email);

		const { rawToken, hashedToken, expiresAt } = generateToken({
			ttlMinutes: 30,
		});

		await createAuthToken({
			userId: user.id,
			tokenHash: hashedToken,
			type: 'signup',
			expiresAt,
		});

		await sendSignupEmail({
			to: email,
			token: rawToken,
			lang,
		});

		return res.json({
			message: 'auth.signup_email_sent',
		});
	} catch (err) {
		console.error(err);

		return res.status(500).json({
			message: 'auth.server_error',
		});
	}
};

export default requestSignup;
