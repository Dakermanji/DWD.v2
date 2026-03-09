//! server/config/middlewares.js

import expressMiddlewares from '../middlewares/expressMiddlewares.js';
import corsMiddleware from '../middlewares/cors.js';
import requestLogger from '../middlewares/requestLogger.js';
import securityHeaders from '../middlewares/securityHeaders.js';
import sessionMiddleware from '../middlewares/session.js';

export default function applyMiddlewares(app) {
	requestLogger(app);
	securityHeaders(app);
	corsMiddleware(app);
	expressMiddlewares(app);
	sessionMiddleware(app);
}
