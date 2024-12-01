const Campaign = require('../models/Campaign');

exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a new campaign
exports.addCampaign = async (req, res) => {
  const { title, description, targetAmount } = req.body;

  try {
    // Validate inputs
    if (!title || !description || !targetAmount) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new campaign
    const newCampaign = new Campaign({
      title,
      description,
      targetAmount,
      raisedAmount: 0, // Initialize raised amount
      contributors: [], // Start with no contributors
      date: Date.now(),
    });

    const savedCampaign = await newCampaign.save();
    res.status(201).json({ message: 'Campaign created successfully', campaign: savedCampaign });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
