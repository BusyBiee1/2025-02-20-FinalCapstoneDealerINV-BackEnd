// import dependencies
import express from 'express'; // Import the Express.js framework
import cors from 'cors'; // Import the CORS middleware
import connectDB from './config/db.mjs'; // Import the database connection function
import dotenv from 'dotenv'; // Import dotenv to load environment variables
import vehicleRoutes from './routes/vehicles.mjs'; // Import vehicle routes
import userRoutes from './routes/users.mjs'; // Import user routes

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an Express application
const PORT = process.env.PORT || 3000; // Define the port number, using environment variable or default to 3000

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// Connect to the database
connectDB();

// Middleware for routes
app.use('/api/vehicles', vehicleRoutes); // Use vehicle routes for /api/vehicles endpoint
app.use('/api/users', userRoutes); // Use user routes for /api/users endpoint

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace
  res.status(500).json({ message: 'An unexpected error occurred', error: err.message }); // Send a 500 Internal Server Error response with a message and error details
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log a message when the server starts
});