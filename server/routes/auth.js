//! server/routes/auth.js

import express from 'express';
import requestSignup from '../controllers/auth/signup.js';

const router = express.Router();

router.post('/signup', requestSignup);

export default router;
