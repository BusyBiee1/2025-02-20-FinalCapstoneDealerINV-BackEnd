// import dependencies
import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.mjs'; // Import controller functions for user registration and login

const router = express.Router(); // Create an Express router instance

// Register user
router.post('/register', registerUser);  // Define a POST route for user registration, using the registerUser controller function

// Login user
router.post('/login', loginUser); // Define a POST route for user login, using the loginUser controller function

export default router;

