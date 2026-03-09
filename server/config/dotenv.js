//! server/config/dotenv.js

import dotenv from 'dotenv';

dotenv.config({ quiet: true });

const env = {
	NODE_ENV: process.env.NODE_ENV ?? 'development',
	PORT: process.env.PORT ?? 3000,
	PROTOCOL: process.env.PROTOCOL ?? 'http',
	DOMAIN_NAME: process.env.DOMAIN_NAME ?? 'localhost',
	CLIENT_URL: process.env.CLIENT_URL ?? 'http://localhost:5173',
	LOG_LEVEL: process.env.LOG_LEVEL ?? 'info',
	SESSION_SECRET: process.env.SESSION_SECRET,
	DB_HOST: process.env.DB_HOST ?? 'localhost',
	DB_PORT: process.env.DB_PORT ?? 5432,
	DB_NAME: process.env.DB_NAME,
	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD,
};

export default env;
