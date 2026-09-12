class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addNode(node) {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        }
    }

    addEdge(source, destination, weight) {
        this.addNode(source);
        this.addNode(destination);

        this.adjacencyList
            .get(source)
            .push({
                node: destination,
                weight
            });
    }

    getNeighbors(node) {
        return this.adjacencyList.get(node) || [];
    }
}

module.exports = Graph;




