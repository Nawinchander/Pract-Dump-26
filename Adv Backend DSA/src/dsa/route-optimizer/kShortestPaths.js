const dijkstra = require("./dijkstra");

function removeEdge(graph, source, destination) {
    const neighbors = graph.getNeighbors(source);

    const index = neighbors.findIndex(
        neighbor => neighbor.node === destination
    );

    if (index === -1) {
        return null;
    }

    const removed = neighbors[index];

    neighbors.splice(index, 1);

    return removed;
}

function restoreEdge(
    graph,
    source,
    edge
) {
    graph
        .getNeighbors(source)
        .push(edge);
}

function findKShortestPaths(
    graph,
    source,
    destination,
    k
) {
    const results = [];

    const firstPath =
        dijkstra(
            graph,
            source,
            destination
        );

    if (!firstPath) {
        return [];
    }

    results.push(firstPath);

    for (
        let iteration = 1;
        iteration < k;
        iteration++
    ) {
        const previous =
            results[iteration - 1];

        let bestCandidate = null;

        for (
            let i = 0;
            i < previous.path.length - 1;
            i++
        ) {
            const spurNode =
                previous.path[i];

            const nextNode =
                previous.path[i + 1];

            const removedEdge =
                removeEdge(
                    graph,
                    spurNode,
                    nextNode
                );

            if (!removedEdge) {
                continue;
            }

            const alternative =
                dijkstra(
                    graph,
                    spurNode,
                    destination
                );

            restoreEdge(
                graph,
                spurNode,
                removedEdge
            );

            if (!alternative) {
                continue;
            }

            const rootPath =
                previous.path.slice(
                    0,
                    i + 1
                );

            const combinedPath = [
                ...rootPath,
                ...alternative.path.slice(1)
            ];

            const candidate = {
                path: combinedPath,
                distance:
                    calculatePathDistance(
                        graph,
                        combinedPath
                    )
            };

            if (
                !bestCandidate ||
                candidate.distance <
                bestCandidate.distance
            ) {
                bestCandidate = candidate;
            }
        }

        if (!bestCandidate) {
            break;
        }

        results.push(bestCandidate);
    }

    return results;
}

function calculatePathDistance(
    graph,
    path
) {
    let total = 0;

    for (
        let i = 0;
        i < path.length - 1;
        i++
    ) {
        const source = path[i];
        const destination = path[i + 1];

        const edge =
            graph
                .getNeighbors(source)
                .find(
                    neighbor =>
                        neighbor.node === destination
                );

        if (!edge) {
            throw new Error(
                "Invalid path"
            );
        }

        total += edge.weight;
    }

    return total;
}

module.exports = findKShortestPaths;



// Important: this is a learning/portfolio implementation. A production-grade K-shortest-path implementation would normally use Yen's algorithm or Eppstein's algorithm, with more careful candidate handling.

// That gives you another interview discussion point.

