//! server/server.js

import app from './config/express.js';
import env from './config/dotenv.js';

const { PORT, PROTOCOL, DOMAIN_NAME } = env;
app.listen(PORT, () => {
	console.log(
		`DWD.v2 backend running on ${PROTOCOL}://${DOMAIN_NAME}:${PORT}`,
	);
});
