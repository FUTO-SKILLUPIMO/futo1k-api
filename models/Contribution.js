const mongoose = require('mongoose');

const contributionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contribution', contributionSchema);
