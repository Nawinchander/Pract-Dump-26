const express = require("express");

const {
    shortestRoute
} = require("../controllers/route.controller");

const router = express.Router();

router.post(
    "/shortest",
    shortestRoute
);

module.exports = router;




