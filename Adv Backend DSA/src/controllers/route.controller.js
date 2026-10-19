const routeService = require("../services/route.service");

async function connectivity(req, res, next) {
  try {
    const data = await routeService.checkConnectivity(req.body);

    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { connectivity };   // Preserve all existing controller exports.




// const {
//     analyzeNetwork
// } = require("../services/route.service");

// async function networkAnalysis(
//     req,
//     res,
//     next
// ) {
//     try {

//         const result =
//             await analyzeNetwork(
//                 req.body
//             );

//         res.status(200).json({
//             success: true,
//             data: result
//         });

//     } catch (error) {
//         next(error);
//     }
// }

// module.exports = {
//     shortestRoute,
//     alternativeRoutes,
//     networkAnalysis
// };


// const express = require("express");

// const {
//     shortestRoute,
//     alternativeRoutes
// } = require("../controllers/route.controller");

// const router = express.Router();

// router.post(
//     "/shortest",
//     shortestRoute
// );

// router.post(
//     "/alternatives",
//     alternativeRoutes
// );

// module.exports = router;



// POST /api/routes/shortest
// POST /api/routes/alternatives



// const {
//     findShortestRoute
// } = require("../services/route.service");

// async function shortestRoute(req, res, next) {
//     try {

//         const result =
//             await findShortestRoute(req.body);

//         res.status(200).json({
//             success: true,
//             data: result
//         });

//     } catch (error) {
//         next(error);
//     }
// }

// module.exports = {
//     shortestRoute
// };




