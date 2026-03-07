//! server/middlewares/session.js

import session from 'express-session';
import env from '../config/dotenv.js';

const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

const sessionMiddleware = (app) => {
	app.use(
		session({
			name: 'dwd.sid',
			secret: env.SESSION_SECRET,
			resave: false,
			saveUninitialized: false,
			rolling: true,
			cookie: {
				httpOnly: true,
				sameSite: 'lax',
				secure: env.NODE_ENV === 'production',
				maxAge: ONE_WEEK,
			},
		}),
	);
};

export default sessionMiddleware;
