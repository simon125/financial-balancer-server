const Expenses = require('../models/Expenses');

// @desc Get all expenses
// @route GET /api/v1/expenses
// @access Public

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expenses.find();
    return res.status(200).json({
      success: true,
      count: expenses.length,
      data: expenses
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc Add expense
// @route POST /api/v1/expenses
// @access Public

exports.addExpense = async (req, res) => {
  try {
    // validation
    const expenses = await Expenses.create(req.body);

    return res.status(201).json({
      success: true,
      data: expenses
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc Remove expense
// @route DELETE /api/v1/expenses
// @access Public

exports.deleteExpense = async (req, res) => {
  try {
    const expenses = await Expenses.findByIdAndDelete(req.body.id);

    return res.status(200).json({
      success: true,
      data: expenses
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc Edit expense
// @route PUT /api/v1/expenses
// @access Public

exports.editExpense = async (req, res) => {
  try {
    const expenses = await Expenses.findOneAndUpdate(req.body._id, req.body, {
      new: true
    });
    return res.status(200).json({
      success: true,
      data: expenses
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
