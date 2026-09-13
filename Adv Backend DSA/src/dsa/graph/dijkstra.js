const PriorityQueue = require("./PriorityQueue");

function dijkstra(graph, start, destination) {
    const distances = new Map();
    const previous = new Map();

    for (const node of graph.adjacencyList.keys()) {
        distances.set(node, Infinity);
        previous.set(node, null);
    }

    distances.set(start, 0);

    const queue = new PriorityQueue();

    queue.enqueue(start, 0);

    while (!queue.isEmpty()) {
        const current = queue.dequeue();

        const currentNode = current.item;
        const currentDistance = current.priority;

        if (currentNode === destination) {
            break;
        }

        if (
            currentDistance >
            distances.get(currentNode)
        ) {
            continue;
        }

        const neighbors =
            graph.getNeighbors(currentNode);

        for (const neighbor of neighbors) {
            const newDistance =
                currentDistance +
                neighbor.weight;

            if (
                newDistance <
                distances.get(neighbor.node)
            ) {
                distances.set(
                    neighbor.node,
                    newDistance
                );

                previous.set(
                    neighbor.node,
                    currentNode
                );

                queue.enqueue(
                    neighbor.node,
                    newDistance
                );
            }
        }
    }

    if (distances.get(destination) === Infinity) {
        return null;
    }

    const path = [];

    let current = destination;

    while (current !== null) {
        path.unshift(current);

        current = previous.get(current);
    }

    return {
        distance: distances.get(destination),
        path
    };
}

module.exports = dijkstra;






