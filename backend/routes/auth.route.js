import express from 'express';
import { authCheck, logout, signin, signup } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', signin)
router.post('/logout', logout)

router.get('/authCheck', protectRoute,authCheck)

export default router;