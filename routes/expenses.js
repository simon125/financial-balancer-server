const express = require('express');
const {
  getExpenses,
  addExpense,
  deleteExpense,
  editExpense
} = require('../controllers/expenses');

const router = express.Router();
router
  .route('/')
  .get(getExpenses)
  .post(addExpense)
  .delete(deleteExpense)
  .put(editExpense);

module.exports = router;
