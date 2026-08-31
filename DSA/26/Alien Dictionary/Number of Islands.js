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



