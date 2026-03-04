//! server/config/logger.js

import winston from 'winston';
import env from './dotenv.js';

const { combine, timestamp, errors, splat, json, printf, colorize } =
	winston.format;

const levelEmoji = {
	error: '❌',
	warn: '⚠️',
	info: 'ℹ️',
	http: '🌐',
	debug: '🐛',
	verbose: '🗣️',
	silly: '🤪',
};

const devPretty = printf(({ level, message, timestamp, stack }) => {
	const icon = levelEmoji[level] ?? '🔹';
	const text = stack || message;

	return `${timestamp} ${icon} ${text}`;
});

const logger = winston.createLogger({
	level: env.LOG_LEVEL ?? 'info',
	format: combine(
		timestamp(),
		errors({ stack: true }),
		splat(),
		env.NODE_ENV === 'production'
			? json()
			: combine(colorize({ message: true }), devPretty),
	),
	transports: [new winston.transports.Console()],
});

export default logger;
