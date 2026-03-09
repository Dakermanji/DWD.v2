//! server/middlewares/cors.js

import cors from 'cors';
import env from '../config/dotenv.js';

export default function corsMiddleware(app) {
	app.use(
		cors({
			origin: env.CLIENT_URL || 'http://localhost:5173',
			credentials: true,
		}),
	);
}
