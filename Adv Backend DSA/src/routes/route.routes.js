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




// {
//     "nodes": [
//         "A",
//         "B",
//         "C",
//         "D"
//     ],
//     "edges": [
//         {
//             "source": "A",
//             "destination": "B",
//             "weight": 5
//         },
//         {
//             "source": "A",
//             "destination": "C",
//             "weight": 10
//         },
//         {
//             "source": "B",
//             "destination": "C",
//             "weight": 3
//         },
//         {
//             "source": "B",
//             "destination": "D",
//             "weight": 8
//         },
//         {
//             "source": "C",
//             "destination": "D",
//             "weight": 2
//         }
//     ]
// }






