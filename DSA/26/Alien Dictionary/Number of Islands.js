// Number of Islands II

// You receive land additions:

// [0,0]
// [0,1]
// [1,2]
// [2,1]
// [1,1]

// After each operation, return the number of islands.

// Example:

// [1,1,1,3,1]

// The key concept is:

// Union Find / DSU

// Each newly added land starts as its own island.

// When adjacent land exists:

// union(a, b)

// and decrement island count.

class DSU {
    constructor(n) {
        this.parent = Array.from(
            { length: n },
            (_, i) => i
        );

        this.rank = new Array(n).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] =
                this.find(this.parent[x]);
        }

        return this.parent[x];
    }

    union(a, b) {
        let rootA = this.find(a);
        let rootB = this.find(b);

        if (rootA === rootB) {
            return false;
        }

        if (this.rank[rootA] < this.rank[rootB]) {
            [rootA, rootB] = [rootB, rootA];
        }

        this.parent[rootB] = rootA;

        if (
            this.rank[rootA] ===
            this.rank[rootB]
        ) {
            this.rank[rootA]++;
        }

        return true;
    }
}




/// Main algorithm :::;
