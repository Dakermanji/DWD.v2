//! server/routes/auth.js

import express from 'express';

import validateSignupEmailRequest from '../middlewares/validation/auth/signupEmail.js';
import requestSignup from '../controllers/auth/signup.js';
import confirmSignup from '../controllers/auth/confirmSignup.js';

const router = express.Router();

router.post('/signup', validateSignupEmailRequest, requestSignup);
router.get('/signup/confirm', confirmSignup);

export default router;
