const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, 'Please add amount of money which you spent']
  },
  storeName: {
    type: String,
    required: [true, 'Please add name of expense or store'],
    trim: true
  },
  date: {
    type: String,
    required: [true, 'Please add date of shopping']
  }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
