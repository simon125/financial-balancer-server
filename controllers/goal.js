const Goal = require('../models/Goal');

// @desc Add goal
// @route POST /api/v1/goal
// @access Public

exports.addGoal = async (req, res) => {
  try {
    const goal = await Goal.create(req.body);

    res.status(201).json({ success: true, data: goal });
  } catch (err) {
    console.error(err);
    res.json(500).json({ error: 'Server error' });
  }
};

// @desc Get goal
// @route GET /api/v1/goal
// @access Public

exports.getGoal = async (req, res) => {
  try {
    const goal = await Goal.find();

    res.status(200).json({
      success: true,
      data: goal
    });
  } catch (err) {
    console.error(err);
    res.json(500).json({ error: 'Server error' });
  }
};

// @desc Edit goal
// @route PUT /api/v1/goal
// @access Public

exports.editGoal = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndUpdate(req.body.id, req.body, {
      new: true
    });

    res.status(200).json({
      success: true,
      data: goal
    });
  } catch (err) {
    console.error(err);
    res.json(500).json({ error: 'Server error' });
  }
};

// @desc Remove goal
// @route DELETE /api/v1/goal
// @access Public

exports.deleteGoal = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.body.id);

    res.status(200).json({
      success: true,
      data: goal
    });
  } catch (err) {
    console.error(err);
    res.json(500).json({ error: 'Server error' });
  }
};
