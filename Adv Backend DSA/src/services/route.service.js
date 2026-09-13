
const Graph = require("../dsa/graph/Graph");
const dijkstra = require("../dsa/graph/dijkstra");
const {
    saveRouteSearch
} = require("../repositories/route.repository");

async function findShortestRoute(data) {

    const graph = new Graph();

    for (const edge of data.edges) {
        graph.addEdge(
            edge.source,
            edge.destination,
            edge.weight
        );
    }

    const result = dijkstra(
        graph,
        data.source,
        data.destination
    );

    if (!result) {
        throw new Error("Route not found");
    }

    await saveRouteSearch({
        userId: data.userId || null,
        source: data.source,
        destination: data.destination,
        distance: result.distance,
        duration: result.distance
    });

    return result;
}

module.exports = {
    findShortestRoute
};






