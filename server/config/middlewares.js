//! server/config/middlewares.js

import expressMiddlewares from '../middlewares/expressMiddlewares.js';
import requestLogger from '../middlewares/requestLogger.js';

export default function applyMiddlewares(app) {
	requestLogger(app);
	expressMiddlewares(app);
}
