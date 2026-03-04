//! server/config/logger.js

import winston from 'winston';
import env from './dotenv.js';

const { combine, timestamp, errors, splat, json, printf, colorize } =
	winston.format;

// Custom levels (include default ones + your two new ones)
const levels = {
	fatal: 0,
	error: 1,
	warn: 2,
	success: 3,
	info: 4,
	http: 5,
	verbose: 6,
	debug: 7,
	silly: 8,
};

winston.addColors({
	fatal: 'inverse red',
	error: 'red',
	warn: 'yellow',
	success: 'green',
	info: 'blue',
	http: 'magenta',
	verbose: 'cyan',
	debug: 'bold gray',
	silly: 'gray',
});

const levelEmoji = {
	fatal: '☠️',
	error: '❌',
	warn: '⚠️',
	success: '✅',
	info: 'ℹ️',
	http: '🌐',
	verbose: '🗣️',
	debug: '🐛',
	silly: '🤪',
};

const devPretty = printf(({ level, message, timestamp, stack }) => {
	const icon = levelEmoji[level] ?? '🔹';
	const text = stack || message;
	return `${timestamp} ${icon} ${text}`;
});

const logger = winston.createLogger({
	levels,
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
