//! server/config/middlewares.js

import expressMiddlewares from '../middlewares/expressMiddlewares.js';

export default function applyMiddlewares(app) {
	expressMiddlewares(app);
}
