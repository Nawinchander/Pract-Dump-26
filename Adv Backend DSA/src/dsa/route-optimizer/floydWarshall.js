function floydWarshall(nodes, edges) {
    const distance = new Map();

    // Initialize matrix
    for (const source of nodes) {
        distance.set(source, new Map());

        for (const destination of nodes) {
            if (source === destination) {
                distance
                    .get(source)
                    .set(destination, 0);
            } else {
                distance
                    .get(source)
                    .set(destination, Infinity);
            }
        }
    }

    // Add edges
    for (const edge of edges) {
        const currentDistance =
            distance
                .get(edge.source)
                .get(edge.destination);

        if (edge.weight < currentDistance) {
            distance
                .get(edge.source)
                .set(
                    edge.destination,
                    edge.weight
                );
        }
    }

    // Floyd-Warshall
    for (const intermediate of nodes) {
        for (const source of nodes) {
            for (const destination of nodes) {

                const sourceToIntermediate =
                    distance
                        .get(source)
                        .get(intermediate);

                const intermediateToDestination =
                    distance
                        .get(intermediate)
                        .get(destination);

                const newDistance =
                    sourceToIntermediate +
                    intermediateToDestination;

                if (
                    newDistance <
                    distance
                        .get(source)
                        .get(destination)
                ) {
                    distance
                        .get(source)
                        .set(
                            destination,
                            newDistance
                        );
                }
            }
        }
    }

    // Detect negative cycle
    for (const node of nodes) {
        if (
            distance
                .get(node)
                .get(node) < 0
        ) {
            throw new Error(
                "Negative cycle detected"
            );
        }
    }

    return distance;
}

module.exports = floydWarshall;



// Complexity
// Time:  O(V³)

// Space: O(V²)

// This is a good interview discussion because you can explain when Dijkstra is preferable and when Floyd-Warshall makes sense.





