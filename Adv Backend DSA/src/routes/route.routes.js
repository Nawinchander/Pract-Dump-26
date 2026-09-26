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




// {
//     "success": true,
//     "data": {
//         "nodes": [
//             "A",
//             "B",
//             "C",
//             "D"
//         ],
//         "matrix": {
//             "A": {
//                 "A": 0,
//                 "B": 5,
//                 "C": 8,
//                 "D": 10
//             },
//             "B": {
//                 "A": "Infinity",
//                 "B": 0,
//                 "C": 3,
//                 "D": 5
//             },
//             "C": {
//                 "A": "Infinity",
//                 "B": "Infinity",
//                 "C": 0,
//                 "D": 2
//             },
//             "D": {
//                 "A": "Infinity",
//                 "B": "Infinity",
//                 "C": "Infinity",
//                 "D": 0
//             }
//         }
//     }
// }





