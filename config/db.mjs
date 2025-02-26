// import dependencies
import mongoose from 'mongoose'; // Import the Mongoose library for MongoDB interaction
import dotenv from 'dotenv'; // Import dotenv to load environment variables

// Set up
dotenv.config(); // Load environment variables from .env file
const db = process.env.MONGO_URI; // Retrieve the MongoDB connection URI from environment variables

// Connection Function
const connectDB = async () => {
  try {
    await mongoose.connect(db); // Attempt to connect to the MongoDB database using the URI

    console.log(`Mongoose DB Connected..`); // Log a success message if the connection is established
  } catch (err) {
    console.error(`DB Error ${err.message}`); // Log an error message if the connection fails

    process.exit(1); // Exit the Node.js process with an error code, indicating a critical failure
  }
};

export default connectDB; // Export the connectDB function for use in other parts of the application
