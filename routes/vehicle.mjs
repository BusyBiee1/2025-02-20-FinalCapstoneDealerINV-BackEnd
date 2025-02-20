import express from 'express';
const router = express.Router();
import VehicleCrtl from '../controllers/vehicleControllers.mjs';

//Read
router.get('/', VehicleCrtl.ReadVehicle);

//Create
router.post('/', VehicleCrtl.CreateVehicle);

//Update / Put 
router.put('/:id', VehicleCrtl.UpdateVehicle);

//Delete
router.delete('/:id', VehicleCrtl.DeleteVehicle);

export default router;
