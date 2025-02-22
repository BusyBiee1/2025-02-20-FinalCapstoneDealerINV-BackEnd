import express from 'express';
import { searchVehicles, getVehicles, addVehicle, updateVehicle, deleteVehicle } from '../controllers/vehicleController.mjs';

const router = express.Router();

// Search
router.get('/search', searchVehicles);
//Read
router.get('/', getVehicles);
//Create
router.post('/', addVehicle);
//Update / Put 
router.put('/:id', updateVehicle);
//Delete
router.delete('/:id', deleteVehicle);

export default router;
