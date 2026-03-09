//! server/config/routes.js

import express from 'express';

import authRoutes from '../routes/auth.js';

const router = express.Router();

router.use('/auth', authRoutes);

router.get('/api/health', (req, res) => {
	res.json({ ok: true });
});

export default router;
