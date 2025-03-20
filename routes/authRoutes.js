// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middlewares/validate');
const { protect } = require('../middlewares/authMiddleware'); 

// Registration route
router.post('/register', validateRegister, register);

// Login route
router.post('/login', validateLogin, login);

// PROTECTED Profile route
router.get('/profile', protect, (req, res) => { // ← USING MIDDLEWARE HERE
  res.json(req.user);
});

module.exports = router;