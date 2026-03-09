//! server/middlewares/validation/auth/signupEmail.js

import {
	validateSignupEmail,
	normalizeEmail,
} from '../../../utils/validation/auth/email.js';

const validateSignupEmailRequest = (req, res, next) => {
	const { email } = req.body;

	const errorKey = validateSignupEmail(email);

	if (errorKey) {
		return res.status(400).json({
			message: errorKey,
		});
	}

	req.body.email = normalizeEmail(email);

	next();
};

export default validateSignupEmailRequest;
