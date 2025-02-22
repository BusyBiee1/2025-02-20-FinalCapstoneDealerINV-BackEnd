import express from 'express';
import cors from 'cors';
import connectDB from './config/db.mjs';
//import mongoose from 'mongoose';
import dotenv from 'dotenv';
import vehicleRoutes from './routes/vehicles.mjs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//Connect to DB
connectDB();

//Middleware
app.use('/api/vehicles', vehicleRoutes);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'An unexpected error occurred', error: err.message });
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
});
