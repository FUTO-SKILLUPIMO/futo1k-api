const express = require('express');
const { getUserDashboard } = require('../controllers/userController');
const auth = require('../middleware/auth');
const router = express.Router();

// Get User Dashboard
router.get('/dashboard', auth, getUserDashboard);

module.exports = router;
