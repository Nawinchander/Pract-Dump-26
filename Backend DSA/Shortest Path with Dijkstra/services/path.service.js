const MinHeap = require("./priorityQueue");

function shortestPath(graph, source, target) {
  const distances = {};
  const previous = {};

  // Step 1: Initialize distances
  for (const node of Object.keys(graph)) {
    distances[node] = Infinity;
    previous[node] = null;
  }

  distances[source] = 0;

  // Step 2: Create Min Heap
  const heap = new MinHeap();

  heap.push([0, source]);

  // Step 3: Process nodes
  while (!heap.isEmpty()) {
    const [currentDistance, currentNode] = heap.pop();

    // Ignore outdated heap entries
    if (currentDistance > distances[currentNode]) {
      continue;
    }

    // We reached target
    if (currentNode === target) {
      break;
    }

    // Step 4: Check neighbors
    for (const [neighbor, weight] of Object.entries(
      graph[currentNode]
    )) {
      const newDistance =
        currentDistance + weight;

      // Step 5: Relax edge
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;

        previous[neighbor] = currentNode;

        heap.push([
          newDistance,
          neighbor
        ]);
      }
    }
  }

  // No path
  if (distances[target] === Infinity) {
    return {
      distance: null,
      path: []
    };
  }

  // Step 6: Reconstruct path
  const path = [];

  let current = target;

  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }

  return {
    distance: distances[target],
    path
  };
}

module.exports = {
  shortestPath
};




