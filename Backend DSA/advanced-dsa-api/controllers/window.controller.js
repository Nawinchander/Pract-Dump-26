const {
  maxSlidingWindow
} = require("../services/window.service");

function getSlidingWindowMaximum(req, res) {
  try {
    const { nums, k } = req.body;

    if (!Array.isArray(nums) || !Number.isInteger(k)) {
      return res.status(400).json({
        error: "nums must be an array and k must be an integer"
      });
    }

    if (k <= 0 || k > nums.length) {
      return res.status(400).json({
        error: "Invalid window size"
      });
    }

    const result = maxSlidingWindow(nums, k);

    res.json({
      input: nums,
      windowSize: k,
      result
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}

module.exports = {
  getSlidingWindowMaximum
};




