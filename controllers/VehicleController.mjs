import Vehicle from '../models/Vehicle.mjs';
// Get / Read
// Search vehicles by make, model, color, year
// eg http://localhost:3000/api/vehicles/search?make=Tesla
export const searchVehicles = async (req, res) => {
  try {
    const { make, model, color, year } = req.query;
    let query = {};

    if (make) query.make = new RegExp(make, 'i');
    if (model) query.model = new RegExp(model, 'i');
    if (color) query.color = new RegExp(color, 'i');
    if (year) query.year = year;

    const vehicles = await Vehicle.find(query);
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get / Read
// eg http://localhost:3000/api/vehicles
export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Post / Create
 // eg http://localhost:3000/api/vehicles
 // eg post request with body: {"make": "Honda","model": "Camry","year": "2020","color": "White"
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
    
     //oc
     //const newVehicle = await vehicle.save();
     //res.status(201).json(newVehicle);
   } catch (error) {
     res.status(500).json({ message: error.message });
   }
 };
 

// Put  / Patch / Update
// eg http://localhost:3000/api/vehicles/12
// eg put request with body: {"make": "Honda", "model": "Camry", "year": "2005", "color": "White" }
export const updateVehicle = async (req, res) => {
  try {
    let query = await Vehicle.findOne({v_id: req.params.id});
    if (query) {
        //console.log(req.params.id, req.body)
        await Vehicle.findOneAndUpdate({ v_id: req.params.id}, req.body);
        res.send(req.body);
        //res.status(201).json(req.body);
        //res.status(201).json({ message: 'Vehicle updated: ' }, req.body);        
    //oc
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
// eg http://localhost:3000/api/vehicles/12
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
    //oc
    //await Vehicle.findByIdAndDelete(req.params.id);
    //res.json({ message: 'Vehicle deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
