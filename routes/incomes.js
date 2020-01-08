const express = require('express');
const {
  getIncomes,
  addIncome,
  deleteIncome,
  editIncome
} = require('../controllers/incomes');

const router = express.Router();
router
  .route('/')
  .get(getIncomes)
  .post(addIncome)
  .delete(deleteIncome)
  .put(editIncome);

module.exports = router;
