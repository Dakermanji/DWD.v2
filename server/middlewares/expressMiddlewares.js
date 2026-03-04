//! server/middlewares/expressMiddlewares.js

import express from 'express';

export default function expressMiddlewares(app) {
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
}
