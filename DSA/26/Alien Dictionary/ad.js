// Given:

// [
//     "wrt",
//     "wrf",
//     "er",
//     "ett",
//     "rftt"
// ]

// Determine the ordering of characters.

// Answer:

// "wertf"
// Core observation

// Compare adjacent words.

// wrt
// wrf

// First difference:



// t → f

// Therefore:

// t comes before f

// Then:

// wrf
// er

// gives:

// w → e

// This creates a directed graph.

// Then:

// Topological Sort







