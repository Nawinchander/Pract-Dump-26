// Cheapest Flights Within K Stops

// Given flights:

// [
//     [0, 1, 100],
//     [1, 2, 100],
//     [0, 2, 500]
// ]

// Find cheapest price from:

// 0 → 2

// with at most:

// 1 stop

// Answer:

// 200

// Because:

// 0 → 1 → 2
// 100 + 100 = 200
// Why normal Dijkstra isn't enough

// The state isn't simply:

// node

// It is:

// (node, stops)

// This is an important FAANG concept:

// State augmentation



function findCheapestPrice(n, flights, src, dst, k) {
    let cost = new Array(n).fill(Infinity);

    cost[src] = 0;

    for (let stops = 0; stops <= k; stops++) {
        const next = [...cost];

        for (const [from, to, price] of flights) {
            if (cost[from] === Infinity) continue;

            next[to] = Math.min(
                next[to],
                cost[from] + price
            );
        }

        cost = next;
    }

    return cost[dst] === Infinity ? -1 : cost[dst];
}



// Complexity
// Time: O(K × E)

// Space: O(V)

// Where:

// V = vertices
// E = edges







