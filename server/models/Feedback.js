const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  ratings: {
    type: [Number],
    required: true,
  },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
