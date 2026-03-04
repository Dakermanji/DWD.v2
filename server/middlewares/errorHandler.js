//! server/middlewares/errorHandler.js

import env from '../config/dotenv.js';
import logger from '../config/logger.js';

export default function errorHandler(err, req, res, next) {
	const status = err.statusCode || err.status || 500;

	// Log (full stack in dev, message-focused in prod)
	if (status >= 500) {
		logger.error('💥 %s %s - %o', req.method, req.originalUrl, err);
	} else {
		logger.warn('⚠️ %s %s - %s', req.method, req.originalUrl, err.message);
	}

	const payload = {
		ok: false,
		error: {
			code:
				err.code || (status >= 500 ? 'INTERNAL_ERROR' : 'BAD_REQUEST'),
			message: err.message || 'Internal Server Error',
		},
	};

	// Only expose stack in non-production
	if (env.NODE_ENV !== 'production') {
		payload.error.stack = err.stack;
	}

	res.status(status).json(payload);
}
