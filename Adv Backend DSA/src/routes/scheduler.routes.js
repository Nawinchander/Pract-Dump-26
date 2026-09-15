const express = require("express");

const {
    schedule
} = require("../controllers/scheduler.controller");

const router = express.Router();

router.post(
    "/critical-path",
    schedule
);

module.exports = router;



