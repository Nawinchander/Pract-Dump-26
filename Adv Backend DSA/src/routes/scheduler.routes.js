// const express = require("express");

// const {
//     schedule
// } = require("../controllers/scheduler.controller");

// const router = express.Router();

// router.post(
//     "/critical-path",
//     schedule
// );

// module.exports = router;



const express = require("express");

const {
    schedule,
    dependencyImpact
} = require(
    "../controllers/scheduler.controller"
);

const router = express.Router();

router.post(
    "/critical-path",
    schedule
);

router.post(
    "/dependency-impact",
    dependencyImpact
);

module.exports = router;



