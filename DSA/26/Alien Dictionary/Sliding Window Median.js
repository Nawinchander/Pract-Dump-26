// Sliding Window Median

// Given:

// nums = [1,3,-1,-3,5,3,6,7]
// k = 3

// Return:

// [1,-1,-1,3,5,6]

// This is a very strong heap problem.

// The idea:

//                     Window
//                        |
//              ┌─────────┴─────────┐
//              ↓                   ↓
//         Max Heap              Min Heap
//         left half             right half

// Maintain:

// size(left) ≈ size(right)


// Median:

// odd:
//     top(left)

// even:
//     (top(left) + top(right)) / 2








