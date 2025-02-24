// Initialize express router
import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.mjs';

const router = express.Router();

// Register
router.post('/register', registerUser);

// Login
router.post('/login', loginUser);

export default router;