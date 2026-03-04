//! server/server.js

import app from './config/express.js';

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`DWD.v2 backend running on http://localhost:${PORT}`);
});
