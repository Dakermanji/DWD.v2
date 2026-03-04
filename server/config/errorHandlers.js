//! server/config/errorHandlers.js

import notFound from '../middlewares/notFound.js';
import errorHandler from '../middlewares/errorHandler.js';

export default function applyErrorHandlers(app) {
	app.use(notFound);
	app.use(errorHandler);
}
