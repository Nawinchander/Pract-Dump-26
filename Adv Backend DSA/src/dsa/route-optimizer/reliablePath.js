// /6. API 10 — Most Reliable Route using a Max Heap


// Dijkstra finds the shortest route by distance or cost. This API instead finds the route with the highest probability of successful delivery.

// For a route containing independent edges, its overall reliability is the product of each edge's probability. The algorithm uses a max heap to explore the currently most reliable candidate first.


class MaxHeap {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    let index = this.items.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.items[parent].reliability >=
          this.items[index].reliability) break;

      [this.items[parent], this.items[index]] =
        [this.items[index], this.items[parent]];

      index = parent;
    }
  }

  pop() {
    if (this.items.length === 0) return null;

    const root = this.items[0];
    const last = this.items.pop();

    if (this.items.length > 0) {
      this.items[0] = last;
      let index = 0;

      while (true) {
        const left = index * 2 + 1;
        const right = index * 2 + 2;
        let largest = index;

        if (
          left < this.items.length &&
          this.items[left].reliability >
            this.items[largest].reliability
        ) {
          largest = left;
        }

        if (
          right < this.items.length &&
          this.items[right].reliability >
            this.items[largest].reliability
        ) {
          largest = right;
        }

        if (largest === index) break;

        [this.items[index], this.items[largest]] =
          [this.items[largest], this.items[index]];

        index = largest;
      }
    }

    return root;
  }

  get size() {
    return this.items.length;
  }
}

function findReliablePath(nodes, edges, source, destination) {
  if (!Array.isArray(nodes) || !Array.isArray(edges)) {
    throw new Error("nodes and edges must be arrays");
  }

  if (new Set(nodes).size !== nodes.length) {
    throw new Error("nodes must be unique");
  }

  const nodeSet = new Set(nodes);

  if (!nodeSet.has(source) || !nodeSet.has(destination)) {
    throw new Error("Source or destination is unknown");
  }

  const graph = new Map(nodes.map(node => [node, []]));

  for (const edge of edges) {
    if (!nodeSet.has(edge.source) ||
        !nodeSet.has(edge.destination)) {
      throw new Error("Edge references an unknown node");
    }

    if (
      !Number.isFinite(edge.probability) ||
      edge.probability < 0 ||
      edge.probability > 1
    ) {
      throw new Error("Probability must be between 0 and 1");
    }

    // Roads are bidirectional in this example.
    graph.get(edge.source).push({
      node: edge.destination,
      probability: edge.probability
    });

    graph.get(edge.destination).push({
      node: edge.source,
      probability: edge.probability
    });
  }

  const best = new Map(nodes.map(node => [node, 0]));
  const previous = new Map();
  const heap = new MaxHeap();

  best.set(source, 1);
  heap.push({ node: source, reliability: 1 });

  while (heap.size > 0) {
    const current = heap.pop();

    if (current.reliability < best.get(current.node)) {
      continue;
    }

    if (current.node === destination) break;

    for (const edge of graph.get(current.node)) {
      const candidate =
        current.reliability * edge.probability;

      if (candidate > best.get(edge.node)) {
        best.set(edge.node, candidate);
        previous.set(edge.node, current.node);

        heap.push({
          node: edge.node,
          reliability: candidate
        });
      }
    }
  }

  if (best.get(destination) === 0) {
    return {
      path: [],
      reliability: 0,
      reachable: false
    };
  }

  const path = [];
  let current = destination;

  while (current !== undefined) {
    path.unshift(current);

    if (current === source) break;
    current = previous.get(current);
  }

  return {
    path,
    reliability: best.get(destination),
    reachable: true
  };
}

module.exports = { MaxHeap, findReliablePath };




{
  "nodes": ["A", "B", "C", "D"],
  "source": "A",
  "destination": "D",
  "edges": [
    { "source": "A", "destination": "B", "probability": 0.9 },
    { "source": "B", "destination": "D", "probability": 0.9 },
    { "source": "A", "destination": "C", "probability": 0.95 },
    { "source": "C", "destination": "D", "probability": 0.8 }
  ]
}




