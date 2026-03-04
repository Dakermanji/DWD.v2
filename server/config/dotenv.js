//! server/config/dotenv.js

import dotenv from 'dotenv';

dotenv.config();

const env = {
	NODE_ENV: process.env.NODE_ENV ?? 'development',
	PORT: process.env.PORT ?? 3000,
	PROTOCOL: process.env.PROTOCOL ?? 'http',
	DOMAIN_NAME: process.env.DOMAIN_NAME ?? 'localhost',
	LOG_LEVEL: process.env.LOG_LEVEL ?? 'info',
};

export default env;
