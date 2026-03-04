//! server/middlewares/requestLogger.js

import morgan from 'morgan';
import logger from '../config/logger.js';

const stream = {
	write: (message) => {
		logger.http(`${message.trim()}`);
	},
};

const requestLogger = (app) => {
	app.use(
		morgan(':method :url :status :response-time ms', {
			stream,
		}),
	);
};

export default requestLogger;
