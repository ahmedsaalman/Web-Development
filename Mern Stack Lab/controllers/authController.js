const bcrypt = require('bcrypt');
// In register handler:
const hashed = await bcrypt.hash(req.body.password, 10);
// Save hashed password instead of plain text.

const jwt = require('jsonwebtoken');
// After verifying user credentials:
const token = jwt.sign({ userId: user._id }, 'jwt-secret-key', {
expiresIn: '1h' });
// Send token to client in HTTP-only cookie
res.cookie('token', token, { httpOnly: true });

req.session.userId = user._id;



const User = require('../models/user');
const bcrypt = require('bcrypt');
exports.register = async (req, res) => {
try {
const { username, password } = req.body;
const hashed = await bcrypt.hash(password, 10);
const newUser = new User({ username, password: hashed });
await newUser.save();
res.status(201).json({ message: 'User registered' });
} catch (err) {
res.status(400).json({ error: 'Username already exists' });
}
};


exports.login = async (req, res) => {
  const { username, password } = req.body;
  
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  // Create JWT
  const token = jwt.sign(
    { userId: user._id }, 
    'jwt-secret-key', 
    { expiresIn: '1h' }
  );
  
  res.cookie('token', token, { httpOnly: true });
  
  // Create session
  req.session.userId = user._id;

  res.json({ message: 'Login successful' });
};