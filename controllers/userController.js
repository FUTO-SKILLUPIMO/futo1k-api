const User = require('../models/user');
const Campaign = require('../models/campaign');

// Get User Dashboard
exports.getUserDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user).populate('supportedCampaigns.campaignId', 'title description');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const totalContributed = user.supportedCampaigns.reduce((total, contribution) => total + contribution.amount, 0);

    res.status(200).json({
      userId: user._id,
      totalContributed,
      supportedCampaigns: user.supportedCampaigns.map((item) => ({
        campaignId: item.campaignId._id,
        title: item.campaignId.title,
        amount: item.amount,
      })),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
