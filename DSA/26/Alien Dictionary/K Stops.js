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








