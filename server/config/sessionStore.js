//! server/config/sessionStore.js

import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';

import pool from './database.js';

const PgSession = connectPgSimple(session);

const sessionStore = new PgSession({
	pool,
	tableName: 'session',
	createTableIfMissing: false,
	pruneSessionInterval: 60 * 15, // every 15 minutes
});

export default sessionStore;
