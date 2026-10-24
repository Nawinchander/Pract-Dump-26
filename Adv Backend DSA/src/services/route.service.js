
const floydWarshall = require("../dsa/route-optimizer/floydWarshall");

async function analyzeNetwork(data) {

    const result =
        floydWarshall(
            data.nodes,
            data.edges
        );

    const matrix = {};

    for (const source of data.nodes) {

        matrix[source] = {};

        for (const destination of data.nodes) {

            matrix[source][destination] =
                result
                    .get(source)
                    .get(destination);
        }
    }

    return {
        nodes: data.nodes,
        matrix
    };
}


// Update your export:

module.exports = { findShortestRoute, findAlternativeRoutes, analyzeNetwork };


const { findReliablePath } = require("../dsa/route-optimizer/reliablePath");

async function calculateReliablePath(data) {
  return findReliablePath(
    data.nodes,
    data.edges,
    data.source,
    data.destination
  );
}


const routeService = require("../services/route.service");

async function reliablePath(req, res, next) {
  try {
    const data =
      await routeService.calculateReliablePath(req.body);

    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    next(error);
  }
}

// Add reliablePath to the existing controller exports.




// const Graph =
//     require("../dsa/route-optimizer/Graph");

// const findKShortestPaths =
//     require(
//         "../dsa/route-optimizer/kShortestPaths"
//     );

// async function findAlternativeRoutes(data) {

//     const graph = new Graph();

//     for (const edge of data.edges) {
//         graph.addEdge(
//             edge.source,
//             edge.destination,
//             edge.weight
//         );
//     }

//     const routes =
//         findKShortestPaths(
//             graph,
//             data.source,
//             data.destination,
//             data.k
//         );

//     return {
//         source: data.source,
//         destination: data.destination,
//         routes
//     };
// }

// module.exports = {
//     findAlternativeRoutes
// };

// module.exports = {
//     findShortestRoute,
//     findAlternativeRoutes
// };



// // const Graph = require("../dsa/graph/Graph");
// // const dijkstra = require("../dsa/graph/dijkstra");
// // const {
// //     saveRouteSearch
// // } = require("../repositories/route.repository");

// // async function findShortestRoute(data) {

// //     const graph = new Graph();

// //     for (const edge of data.edges) {
// //         graph.addEdge(
// //             edge.source,
// //             edge.destination,
// //             edge.weight
// //         );
// //     }

// //     const result = dijkstra(
// //         graph,
// //         data.source,
// //         data.destination
// //     );

// //     if (!result) {
// //         throw new Error("Route not found");
// //     }

// //     await saveRouteSearch({
// //         userId: data.userId || null,
// //         source: data.source,
// //         destination: data.destination,
// //         distance: result.distance,
// //         duration: result.distance
// //     });

// //     return result;
// // }

// // module.exports = {
// //     findShortestRoute
// // };






