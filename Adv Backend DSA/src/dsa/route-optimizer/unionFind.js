class UnionFind {
  constructor(nodes) {
    this.parent = new Map();
    this.rank = new Map();

    for (const node of nodes) {
      this.parent.set(node, node);
      this.rank.set(node, 0);
    }
  }

  find(node) {
    if (!this.parent.has(node)) {
      throw new Error(`Unknown node: ${node}`);
    }

    if (this.parent.get(node) !== node) {
      this.parent.set(node, this.find(this.parent.get(node)));
    }

    return this.parent.get(node);
  }

  union(a, b) {
    let rootA = this.find(a);
    let rootB = this.find(b);

    if (rootA === rootB) return;

    const rankA = this.rank.get(rootA);
    const rankB = this.rank.get(rootB);

    if (rankA < rankB) {
      this.parent.set(rootA, rootB);
    } else if (rankA > rankB) {
      this.parent.set(rootB, rootA);
    } else {
      this.parent.set(rootB, rootA);
      this.rank.set(rootA, rankA + 1);
    }
  }

  getComponents() {
    const groups = new Map();

    for (const node of this.parent.keys()) {
      const root = this.find(node);

      if (!groups.has(root)) groups.set(root, []);
      groups.get(root).push(node);
    }

    return [...groups.values()];
  }
}

function analyzeConnectivity(nodes, edges, source, destination) {
  if (!Array.isArray(nodes) || !Array.isArray(edges)) {
    throw new Error("nodes and edges must be arrays");
  }

  if (new Set(nodes).size !== nodes.length) {
    throw new Error("nodes must be unique");
  }

  const dsu = new UnionFind(nodes);

  for (const edge of edges) {
    dsu.union(edge.source, edge.destination);
  }

  return {
    connected: dsu.find(source) === dsu.find(destination),
    components: dsu.getComponents()
  };
}

module.exports = { UnionFind, analyzeConnectivity };




// For example, if you export an object of functions, append checkConnectivity to that object. Don't replace the existing exports.


// request and response

// request 



// response



