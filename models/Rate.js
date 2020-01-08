const mongoose = require('mongoose');

const Rate = new mongoose.Schema({
  rate: {
    type: Number,
    required: [true, 'Please add amount of money which you get'],
    max: 5,
    min: 0
  }
});

module.exports = mongoose.model('Rate', Rate);
