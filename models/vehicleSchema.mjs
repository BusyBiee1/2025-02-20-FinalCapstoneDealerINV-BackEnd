import mongoose from 'mongoose';

const VehicleSchema = new mongoose.Schema({
  Vid: {
    type: Number, required: true,
  },
  Make: {
    type: String, required: true,
  },
  Model: {
    type: String, required: true,
  },
  Color: {
    type: String, required: true,
  },
  Year: {
    type: Number, required: true,
  },
});

export default mongoose.model('Vehicles', VehicleSchema);
