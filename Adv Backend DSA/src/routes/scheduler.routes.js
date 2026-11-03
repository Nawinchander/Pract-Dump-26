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


/// expected response

// {
//   "success": true,
//   "data": {
//     "totalTasks": 4,
//     "completedTasks": 3,
//     "skippedTasks": 1,
//     "totalDuration": 6,
//     "schedule": [
//       {
//         "id": "TASK-D",
//         "duration": 1,
//         "deadline": 2,
//         "start": 0,
//         "finish": 1,
//         "meetsDeadline": true
//       },
//       {
//         "id": "TASK-B",
//         "duration": 2,
//         "deadline": 3,
//         "start": 1,
//         "finish": 3,
//         "meetsDeadline": true
//       },
//       {
//         "id": "TASK-C",
//         "duration": 3,
//         "deadline": 6,
//         "start": 3,
//         "finish": 6,
//         "meetsDeadline": true
//       }
//     ],
//     "skippedTaskIds": ["TASK-A"]
//   }
// }











