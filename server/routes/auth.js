//! server/routes/auth.js

import express from 'express';

import validateSignupEmailRequest from '../middlewares/validation/auth/signupEmail.js';
import requestSignup from '../controllers/auth/signup.js';

const router = express.Router();

router.post('/signup', validateSignupEmailRequest, requestSignup);

export default router;
