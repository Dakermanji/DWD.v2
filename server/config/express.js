//! server/config/express.js

import express from 'express';
import applyMiddlewares from './middlewares.js';
import applyErrorHandlers from './errorHandlers.js';

const app = express();

applyMiddlewares(app);

app.get('/api/health', (req, res) => {
	res.json({ ok: true });
});

applyErrorHandlers(app);

export default app;
