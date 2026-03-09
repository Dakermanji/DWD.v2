//! server/controllers/auth/signup.js

import sendSignupEmail from '../../utils/mail/sendSignupEmail.js';

const requestSignup = async (req, res) => {
	const { email } = req.body;
	const rawToken = 'test_dev';
	const lang = 'en';

	try {
		await sendSignupEmail({ to: email, token: rawToken, lang });
		return res.json({ message: 'auth.signup_email_sent' });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: 'auth.server_error' });
	}
};
export default requestSignup;
