const express = require('express');
const {
  getGoal,
  addGoal,
  deleteGoal,
  editGoal
} = require('../controllers/goal');

const router = express.Router();
router
  .route('/')
  .get(getGoal)
  .post(addGoal)
  .delete(deleteGoal)
  .put(editGoal);

module.exports = router;
