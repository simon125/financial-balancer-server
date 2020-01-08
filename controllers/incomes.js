const Incomes = require('../models/Incomes');

// @desc Get all incomes
// @route GET /api/v1/incomes
// @access Public
exports.getIncomes = async (req, res) => {
  try {
    const incomes = await Incomes.find();
    return res.status(200).json({
      success: true,
      count: incomes.length,
      data: incomes
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc Add income
// @route POST /api/v1/incomes
// @access Public

exports.addIncome = async (req, res) => {
  try {
    // validation
    const incomes = await Incomes.create({ ...req.body, editDate: Date.now() });

    return res.status(201).json({
      success: true,
      data: incomes
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc Delete income
// @route DELETE /api/v1/incomes
// @access Public

exports.deleteIncome = async (req, res) => {
  try {
    // validation
    const incomes = await Incomes.findByIdAndDelete(req.body.id);
    return res.status(201).json({
      success: true,
      data: incomes
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc Edit income
// @route PUT /api/v1/income
// @access Public

exports.editIncome = async (req, res) => {
  try {
    req.body.editDate = Date.now();
    const incomes = await Incomes.findOneAndUpdate(req.body._id, req.body, {
      new: true
    });
    res.status(200).json({
      success: true,
      data: incomes
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
