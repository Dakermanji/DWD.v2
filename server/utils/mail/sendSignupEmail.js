//! server/utils/mail/sendSignupEmail.js

import transporter from '../../config/nodemailer.js';

import env from '../../config/dotenv.js';

const sendSignupEmail = async ({ to, token, lang = 'en' }) => {
	const signupUrl = `${env.CLIENT_URL}/auth/confirm?token=${token}`;

	await transporter.sendMail({
		to: to,
		subject: 'Confirm your account',
		html: `
        <p>Please confirm your account:</p>
        <a href="${signupUrl}">${signupUrl}</a>
        `,
	});
};

export default sendSignupEmail;
