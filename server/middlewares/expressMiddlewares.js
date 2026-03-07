//! server/middlewares/expressMiddlewares.js

import express from 'express';

export default function expressMiddlewares(app) {
	app.use(express.json({ limit: '10kb' }));
	app.use(express.urlencoded({ extended: true, limit: '10kb' }));
}
