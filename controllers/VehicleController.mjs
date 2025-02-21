import Vehicle from '../models/Vehicle.mjs';

// Get / Read
export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Post / Create
export const addVehicle = async (req, res) => {
  //console.log('req: ', req.body);
  //const vehicle = new Vehicle(req.body);
  try {
    //console.log("here");
    let result = await Vehicle.findOne().sort({v_id: -1});
    //console.log('result: ', result);
    if (result) 
    //if (result.v_id) 
        req.body.v_id = result.v_id + 1;
    else 
        req.body.v_id = 1;
    //console.log('New : ', req.body.v_id);
    await Vehicle.create(req.body)
    res.json(req.body);
    //res.status(201).json(req.body);
    //res.status(201).json({ message: 'Vehicle added: ' }, req.body);        


    //await Vehicle.create(req.body);
    //res.status(201).json(req.body);
    
    //res.send(req.body);
    
    //orig code
    //const newVehicle = await vehicle.save();
    //res.status(201).json(newVehicle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Push  / Put
export const updateVehicle = async (req, res) => {
  try {
    let query = await Vehicle.findOne({v_id: req.params.id});
    if (query) {
        //console.log(req.params.id, req.body)
        await Vehicle.findOneAndUpdate({ v_id: req.params.id}, req.body);
        res.send(req.body);
        //res.status(201).json(req.body);
        //res.status(201).json({ message: 'Vehicle updated: ' }, req.body);        
    //orig code
    //const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    //res.json(updatedVehicle);
    }
    else {
      res.send("No vehicle found for that vehicle id 'v_id': " + req.params.id);    
  }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete
export const deleteVehicle = async (req, res) => {
  try {
    let query = await Vehicle.findOne({v_id: req.params.id});
    if (query) {
        //console.log("Request to delete: ",req.params.id, req.body)
        await Vehicle.findOneAndDelete({v_id: req.params.id});
        //res.send("A user was deleted with user_id of: "+ req.params.id);
        res.status(200).json({ msg: 'Item Deleted' });
        //res.send(query);
        //res.status(201).json({ message: 'Vehicle deleted: ' }, req.body);        
    }
    else {
        res.send("No vehicle found for that vehicle id 'v_id': " + req.params.id);    
    }
    //orig code
    //await Vehicle.findByIdAndDelete(req.params.id);
    //res.json({ message: 'Vehicle deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
