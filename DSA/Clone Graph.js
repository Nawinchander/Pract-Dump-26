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


Complexity
Time: O(V + E)
Space: O(V)


Problem 4: Copy List With Random Pointer

This is often asked immediately after Clone Graph.

LeetCode 138

Each node contains:


{
  val,
  next,
  random
}

7 -> 13 -> 11

13.random -> 7
11.random -> 13


class Node {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

function copyRandomList(head) {
    if (!head) return null;

    const map = new Map();

    let curr = head;

    while (curr) {
        map.set(
            curr,
            new Node(curr.val)
        );
        curr = curr.next;
    }

    curr = head;

    while (curr) {
        map.get(curr).next =
            curr.next
                ? map.get(curr.next)
                : null;

        map.get(curr).random =
            curr.random
                ? map.get(curr.random)
                : null;

        curr = curr.next;
    }

    return map.get(head);
}

Time: O(n)
Space: O(n)


