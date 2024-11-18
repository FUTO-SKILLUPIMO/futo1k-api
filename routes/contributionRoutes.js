const express = require('express');
const { supportCampaign, getUserContributions } = require('../controllers/contributionController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/support', auth, supportCampaign);
router.get('/my-contributions', auth, getUserContributions);

module.exports = router;
