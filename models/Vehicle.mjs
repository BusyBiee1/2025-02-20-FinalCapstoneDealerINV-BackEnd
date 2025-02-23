import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  v_id: { type: Number, required: true, unique: true, index: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  color: { type: String, required: true },
  year: { type: String, required: true },
});

vehicleSchema.index({ v_id: 1 });

export default mongoose.model('Vehicle', vehicleSchema);
