const mongoose = require('mongoose');

const IncomesSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, 'Please add amount of money which you get']
  },
  source: {
    type: String,
    required: [true, 'Please add name of source'],
    trim: true
  },
  date: {
    type: String,
    required: [true, 'Please add date of getting money']
  }
});

module.exports = mongoose.model('Incomes', IncomesSchema);
