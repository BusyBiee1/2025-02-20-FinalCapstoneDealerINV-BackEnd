import User from '../models/User.mjs';
import bcrypt from 'bcryptjs';

// Register a new user
//http://localhost:3000/api/users/register
// eg post request with body: {"username":"user1","password":"password1","firstname":"User","lastname":"One"}
export const registerUser = async (req, res) => {
  try {
    const { username, password, firstname, lastname } = req.body;

    // Check if user already exists
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Generate a new u_id
    let result = await User.findOne().sort({u_id: -1});
    const u_id = result ? result.u_id + 1 : 1;

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      u_id,
      username,
      password: hashedPassword,
      firstname,
      lastname
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully', u_id: user.u_id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login user
// http://localhost:3000/api/users/login
// eg post request with body: {"username":"user1","password":"password1"}
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // User authenticated
    res.json({ message: 'Login successful', u_id: user.u_id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/*
// Login user
// http://localhost:3000/api/users/login
// eg post request with body: {"username":"user1","password":"password1"}
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // User authenticated
    res.json({ message: 'Login successful', u_id: user.u_id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/