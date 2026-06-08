// Graph Traversal
// DFS
// BFS
// HashMap
// Deep Copy
// Cycle Detection


Problem 3: Clone Graph
LeetCode 133

Given a reference node in a connected graph, return a deep copy of the graph.

Example
1 --- 2
|     |
4 --- 3

class Node {
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

function cloneGraph(node) {
    if (!node) return null;

    const map = new Map();

    function dfs(curr) {
        if (map.has(curr)) {
            return map.get(curr);
        }

        const clone = new Node(curr.val);

        map.set(curr, clone);

        for (const neighbor of curr.neighbors) {
            clone.neighbors.push(
                dfs(neighbor)
            );
        }

        return clone;
    }

    return dfs(node);
}



