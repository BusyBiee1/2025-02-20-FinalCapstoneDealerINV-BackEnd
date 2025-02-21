import express from 'express';
import { getVehicles, addVehicle, updateVehicle, deleteVehicle } from '../controllers/vehicleController.mjs';

const router = express.Router();

//Read
router.get('/', getVehicles);
//Create
router.post('/', addVehicle);
//Update / Put 
router.put('/:id', updateVehicle);
//Delete
router.delete('/:id', deleteVehicle);

export default router;
