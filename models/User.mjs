import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  u_id: { type: Number, required: true, unique: true, index: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
});

// dont need this line as it becomes a duplicate index after putting u_id index:true in schema above
//userSchema.index({ u_id: 1 });

export default mongoose.model('User', userSchema);
