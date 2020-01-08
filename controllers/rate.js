const Rate = require('../models/Rate');

// @desc Add Rate
// @route POST /api/v1/Rate
// @access Public

exports.addRate = async (req, res) => {
  try {
    const rate = await Rate.create(req.body);

    res.status(201).json({ success: true, data: rate });
  } catch (err) {
    console.error(err);
    res.json(500).json({ error: 'Server error' });
  }
};

// @desc Get Rate
// @route GET /api/v1/Rate
// @access Public

exports.getRate = async (req, res) => {
  try {
    const rate = await Rate.find();

    res.status(200).json({
      success: true,
      data: rate
    });
  } catch (err) {
    console.error(err);
    res.json(500).json({ error: 'Server error' });
  }
};

// @desc Edit Rate
// @route PUT /api/v1/Rate
// @access Public

exports.editRate = async (req, res) => {
  try {
    const rate = await Rate.findByIdAndUpdate(req.body.id, req.body, {
      new: true
    });

    res.status(200).json({
      success: true,
      data: rate
    });
  } catch (err) {
    console.error(err);
    res.json(500).json({ error: 'Server error' });
  }
};
