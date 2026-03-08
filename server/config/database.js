//! server/config/database.js

import pg from 'pg';
import env from './dotenv.js';
import logger from './logger.js';

const { Pool } = pg;

const pool = new Pool({
	host: env.DB_HOST,
	port: Number(env.DB_PORT),
	database: env.DB_NAME,
	user: env.DB_USER,
	password: env.DB_PASSWORD,
	connectionTimeoutMillis: 10000,
});

let dbIsReady = false;

function getConnectionStatus() {
	return dbIsReady;
}

function handleDatabaseError(error, context = {}) {
	const knownMessages = {
		ECONNREFUSED: '🗄️ Database connection was refused.',
		ENOTFOUND: '🗄️ Database host not found.',
		ETIMEDOUT: '🗄️ Database connection timed out.',
	};

	const message =
		knownMessages[error.code] ||
		`🗄️ Unexpected PostgreSQL error: ${error.message}`;

	if (env.NODE_ENV === 'development') logger.error(message, error);
	else logger.warn(message);
}

pool.on('error', (error) => {
	dbIsReady = false;
	handleDatabaseError(error, { phase: 'pool' });
	// Sentry.captureException(error);
});

async function initDatabase() {
	try {
		await pool.query('SELECT 1');
		dbIsReady = true;
		logger.success('🗄️ Connected to the PostgreSQL database.');
	} catch (error) {
		dbIsReady = false;
		handleDatabaseError(error, { phase: 'init' });
		throw error;
	}
}

async function closeDatabasePool() {
	try {
		logger.info('🗄️ Closing PostgreSQL pool...');
		await pool.end();
		logger.success('🗄️ PostgreSQL pool closed.');
	} catch (error) {
		handleDatabaseError(error, { phase: 'shutdown' });
		throw error;
	}
}

export default pool;
export { pool, initDatabase, getConnectionStatus, closeDatabasePool };
