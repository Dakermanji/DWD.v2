//! server/server.js

import app from './config/express.js';
import env from './config/dotenv.js';
import logger from './config/logger.js';
import initProcessHandlers from './config/processHandlers.js';

const { PORT, PROTOCOL, DOMAIN_NAME } = env;

const server = app.listen(PORT, () => {
	logger.success(
		`🚀 DWD.v2 backend running on ${PROTOCOL}://${DOMAIN_NAME}:${PORT}`,
	);
});

initProcessHandlers(server);
