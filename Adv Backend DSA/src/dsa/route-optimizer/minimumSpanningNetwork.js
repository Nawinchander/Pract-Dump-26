function minimumSpanningNetwork(nodes, edges) {
  if (!Array.isArray(nodes) || !Array.isArray(edges)) {
    throw new Error("nodes and edges must be arrays");
  }

  if (new Set(nodes).size !== nodes.length) {
    throw new Error("Node IDs must be unique");
  }

  const nodeSet = new Set(nodes);

  // A separate Union-Find implementation keeps this
  // algorithm independent of the existing APIs.
  const parent = new Map();
  const rank = new Map();

  for (const node of nodes) {
    parent.set(node, node);
    rank.set(node, 0);
  }

  function find(node) {
    if (!parent.has(node)) {
      throw new Error(`Unknown node: ${node}`);
    }

    if (parent.get(node) !== node) {
      parent.set(node, find(parent.get(node)));
    }

    return parent.get(node);
  }

  function union(a, b) {
    let rootA = find(a);
    let rootB = find(b);

    if (rootA === rootB) return false;

    if (rank.get(rootA) < rank.get(rootB)) {
      parent.set(rootA, rootB);
    } else if (rank.get(rootA) > rank.get(rootB)) {
      parent.set(rootB, rootA);
    } else {
      parent.set(rootB, rootA);
      rank.set(rootA, rank.get(rootA) + 1);
    }

    return true;
  }

  for (const edge of edges) {
    if (
      !nodeSet.has(edge.source) ||
      !nodeSet.has(edge.destination)
    ) {
      throw new Error("Edge references an unknown node");
    }

    if (
      !Number.isFinite(edge.weight) ||
      edge.weight < 0
    ) {
      throw new Error("Edge weight must be non-negative");
    }
  }

  const sortedEdges = [...edges].sort(
    (a, b) => a.weight - b.weight
  );

  const selectedEdges = [];
  let totalCost = 0;

  for (const edge of sortedEdges) {
    if (union(edge.source, edge.destination)) {
      selectedEdges.push(edge);
      totalCost += edge.weight;

      if (selectedEdges.length === nodes.length - 1) {
        break;
      }
    }
  }

  return {
    edges: selectedEdges,
    totalCost,
    connected:
      nodes.length === 0 ||
      selectedEdges.length === nodes.length - 1
  };
}

module.exports = { minimumSpanningNetwork };


// How it works:
// 1. Sort all edges by increasing cost.
// 2. Select the cheapest edge that doesn't create a cycle.
// 3. Repeat until all nodes are connected or no more edges can be selected.
// 4. Return the selected edges, total cost, and connectivity status.
// For a graph with \(V\) vertices and \(E\) edges, the time complexity is \(O(E\log E)\), dominated by sorting.






