const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  raisedAmount: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  contributors: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      amount: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model('Campaign', campaignSchema);
