require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to database
//connectDB();
if (process.env.NODE_ENV !== 'test') {
    connectDB();
  }

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//module.exports = app;