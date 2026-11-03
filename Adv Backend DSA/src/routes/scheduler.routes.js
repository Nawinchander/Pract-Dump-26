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

const {schedule,dependencyImpact} = require("../controllers/scheduler.controller");

const router = express.Router();

router.post("/critical-path",schedule);

router.post("/dependency-impact",dependencyImpact);

router.post("/critical-path",schedule);

router.post("/dependency-impact",dependencyImpact);

router.post("/task-priority",taskPriority);

const {executionOrder} = require("../controllers/scheduler.controller");

router.post("/execution-order", executionOrder);

const {deadlineAnalysis} = require("../controllers/scheduler.controller");

router.post("/deadline-analysis", deadlineAnalysis);

module.exports = router;

/// POST /api/scheduler/deadline-analysis
//// POST /api/scheduler/task-priority

// {
//   "tasks": [
//     { "id": "TASK-A", "duration": 4, "deadline": 5 },
//     { "id": "TASK-B", "duration": 2, "deadline": 3 },
//     { "id": "TASK-C", "duration": 3, "deadline": 6 },
//     { "id": "TASK-D", "duration": 1, "deadline": 2 }
//   ]
// }










