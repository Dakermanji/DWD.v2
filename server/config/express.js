//! server/config/express.js

import express from 'express';

import applyMiddlewares from './middlewares.js';
import router from './routes.js';
import applyErrorHandlers from './errorHandlers.js';

const app = express();

app.set('trust proxy', 1);

applyMiddlewares(app);

app.use('/', router);

applyErrorHandlers(app);

export default app;
