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



router.post(
    "/shortest",
    shortestRoute
);

router.post(
    "/alternatives",
    alternativeRoutes
);

router.post(
    "/network-analysis",
    networkAnalysis
);


//// POST /api/routes/network-analysis

