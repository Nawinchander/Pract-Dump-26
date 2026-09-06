const express = require("express");

const {
  getSlidingWindowMaximum
} = require("../controllers/window.controller");

const router = express.Router();

router.post(
  "/sliding-window-max",
  getSlidingWindowMaximum
);

module.exports = router;


