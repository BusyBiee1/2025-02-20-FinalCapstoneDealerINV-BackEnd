import Dogs from '../models/vehicleSchema.mjs';

//Functions
const CreateVehicle = async (req, res) => {
  try {
    let newVehicle = new Vehicles(req.body);

    await newVehicle.save();

    res.json(newVehicle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

const ReadVehicle = async (req, res) => {
  try {
    //Get data dn save to variable
    const allVehicle = await Vehicles.find({});
    //Send data to front end: res
    res.json(allVehicles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

const UpdateVehicle = async (req, res) => {
  try {
    const updatedVehicle = await Vehicles.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedVehicle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

const DeleteVehicle = async (req, res) => {
  try {
    await Vehicles.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: 'Item Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};
export default { CreateVehicle, ReadVehicle, UpdateVehicle, DeleteVehicle };
