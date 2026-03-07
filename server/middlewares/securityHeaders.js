//! server/middlewares/securityHeaders.js

import helmet from 'helmet';

export default function securityHeaders(app) {
	app.disable('x-powered-by');

	app.use(
		helmet({
			contentSecurityPolicy: false,
			crossOriginEmbedderPolicy: false,
		}),
	);
}
