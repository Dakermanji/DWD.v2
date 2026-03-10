//! server/controllers/auth/signup.js

import { findUserByEmail } from '../../models/user.js';
import sendSignupEmail from '../../utils/mail/sendSignupEmail.js';

const requestSignup = async (req, res) => {
	const { email } = req.body;
	const lang = 'en';

	try {
		const user = await findUserByEmail(email);

		// For now we just log this — later it affects logic
		if (user) {
			console.log('Signup requested for existing email');
		}

		const rawToken = 'test_dev';

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
