const Contribution = require('../models/Contribution');
const Campaign = require('../models/Campaign');

exports.supportCampaign = async (req, res) => {
  const { campaignId, amount } = req.body;

  try {
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

    campaign.raisedAmount += amount;
    await campaign.save();

    const contribution = new Contribution({
      user: req.user,
      campaign: campaignId,
      amount,
    });

    await contribution.save();
    res.json({ message: 'Contribution successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUserContributions = async (req, res) => {
  try {
    const contributions = await Contribution.find({ user: req.user }).populate('campaign', 'name description');
    res.json(contributions);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
