const express = require('express');
const { getCampaigns } = require('../controllers/campaignController');
const { addCampaign } = require('../controllers/campaignController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', getCampaigns);

// Add Campaign
router.post('/', auth, addCampaign);

module.exports = router;
