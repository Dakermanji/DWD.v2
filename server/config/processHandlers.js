//! server/config/processHandlers.js

import logger from './logger.js';
import { closeDatabasePool } from './database.js';

export default function initProcessHandlers(server) {
	// Unhandled promise rejections
	process.on('unhandledRejection', (reason) => {
		logger.fatal(`⚙️ Unhandled Rejection: ${reason}`);

		if (server) {
			server.close(() => process.exit(1));
		} else {
			process.exit(1);
		}
	});

	// Uncaught exceptions
	process.on('uncaughtException', (err) => {
		logger.fatal(`⚙️ Uncaught Exception: ${err.stack || err}`);

		if (server) {
			server.close(() => process.exit(1));
		} else {
			process.exit(1);
		}
	});

	const shutdown = async (signal) => {
		logger.warn(`⚙️ Received ${signal}. Shutting down gracefully...`);

		setTimeout(() => {
			logger.error('⚙️ Forced shutdown after timeout ⌛.');
			process.exit(1);
		}, 5000);

		if (!server) {
			await closeDatabasePool();
			process.exit(0);
			return;
		}

		server.close(async () => {
			logger.success('🌐 HTTP server closed.');

			await closeDatabasePool();

			logger.success('🚀 Server closed. Bye!');
			process.exit(0);
		});
	};

	process.on('SIGINT', () => shutdown('SIGINT'));
	process.on('SIGTERM', () => shutdown('SIGTERM'));
}
