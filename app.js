const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/auth');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', routes);

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}

Happy Coding...`));
