const express = require('express');
const { registerUser, loginUser, getUserInfo } = require('../controllers/authController');
const auth = require('../middleware/auth');
const router = express.Router();

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

// Protected Route (Authenticated)
router.get('/me', auth, getUserInfo);

module.exports = router;
