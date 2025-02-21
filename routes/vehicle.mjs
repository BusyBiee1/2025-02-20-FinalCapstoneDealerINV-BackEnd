import express from 'express';
import VehicleCrtl from '../controllers/vehicleControllers.mjs';
router.get('/', VehicleCrtl.ReadVehicle);
router.post('/', VehicleCrtl.CreateVehicle);
router.put('/:id', VehicleCrtl.UpdateVehicle);
router.delete('/:id', VehicleCrtl.DeleteVehicle);
export default router;
