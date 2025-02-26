// import dependencies
import User from '../models/User.mjs'; // Import the User model for database interaction
import bcrypt from 'bcryptjs';  // Import bcryptjs for password hashing

// Register a new user
//http://localhost:3000/api/users/register
// eg post request with body: {"username":"user1","password":"password1","firstname":"User","lastname":"One"}
export const registerUser = async (req, res) => {
  try {
    const { username, password, firstname, lastname } = req.body; // Extract user data from the request body

    // Check if user already exists
    let user = await User.findOne({ username }); // Find a user with the given username
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Generate a new u_id
    let result = await User.findOne().sort({u_id: -1});  // Find the user with the highest u_id
    const u_id = result ? result.u_id + 1 : 1;  // Increment the u_id or set it to 1 if no users exist

    // Hash password
    const salt = await bcrypt.genSalt(10); // Generate a salt for password hashing
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password using bcrypt

    // Create new user
    user = new User({
      u_id,
      username,
      password: hashedPassword,
      firstname,
      lastname
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully', u_id: user.u_id }); // Return a 201 Created response with a success 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login user
// http://localhost:3000/api/users/login
// eg post request with body: {"username":"user1","password":"password1"}
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body; // Extract username and password from the request body

    // Check if user exists
    const user = await User.findOne({ username }); // Find a user with the given username
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);  // Compare the provided password with the stored hashed password
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // User authenticated
    res.json({ 
      message: 'Login successful', 
      u_id: user.u_id,
      firstname: user.firstname,
      lastname: user.lastname
    }); // Return a JSON response with a success message and user information
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
