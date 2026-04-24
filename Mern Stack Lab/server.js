// server.js
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();



// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(session({
secret: 'secret-key', // TODO: use env variable in real apps
resave: false,
saveUninitialized: true,
cookie: { httpOnly: true } // default: httpOnly true[4]
}));



// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/creatureDB')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Basic route to check server
app.get('/', (req, res) => {
res.send('Hello from Creature Collector API');
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});

const authRoutes = require('./routes/auth');
const creatureRoutes = require('./routes/creatures');
app.use('/auth', authRoutes);
app.use('/creatures', creatureRoutes);