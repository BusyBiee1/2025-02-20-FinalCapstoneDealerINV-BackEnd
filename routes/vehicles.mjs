// import dependencies
import express from 'express'; // Import the Express.js framework
// Import controller functions from VehicleController.mjs
import { searchVehicles, getVehicles, addVehicle, updateVehicle, deleteVehicle } from '../controllers/VehicleController.mjs'; 

const router = express.Router(); // Create an Express router instance

// Search
router.get('/search', searchVehicles); // Define a GET route for searching vehicles, using the searchVehicles controller function
// Read
router.get('/', getVehicles); // Define a GET route for retrieving all vehicles, using the getVehicles controller function
// Create
router.post('/', addVehicle); // Define a POST route for adding a new vehicle, using the addVehicle controller function
// Update / Put
router.put('/:id', updateVehicle); // Define a PUT route for updating a vehicle by ID, using the updateVehicle controller function
// Delete
router.delete('/:id', deleteVehicle); // Define a DELETE route for deleting a vehicle by ID, using the deleteVehicle controller function

export default router; // Export the router for use in other parts of the application (e.g., server.mjs)

