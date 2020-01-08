const mongoose = require('mongoose');

const Goal = new mongoose.Schema({
  goalDeadline: {
    type: String
  },
  target: {
    type: Number,
    min: 0
  }
});

module.exports = mongoose.model('Goal', Goal);
