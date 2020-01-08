const express = require('express');
const { getRate, addRate, editRate } = require('../controllers/rate');

const router = express.Router();
router
  .route('/')
  .get(getRate)
  .post(addRate)
  .put(editRate);

module.exports = router;
