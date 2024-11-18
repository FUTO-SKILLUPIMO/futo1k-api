const express = require('express');
const { getCampaigns } = require('../controllers/campaignController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, getCampaigns);

module.exports = router;
