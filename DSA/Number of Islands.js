// Number of Islands — 2 FAANG-Level Problems

// Grid Traversal
// DFS
// BFS
// Union Find
// Connected Components


// Problem 1: Number of Islands
// LeetCode 200

// Given a 2D grid of '1' (land) and '0' (water), return the number of islands.

// Example

Input:

[
 ["1","1","0","0"],
 ["1","1","0","0"],
 ["0","0","1","0"],
 ["0","0","0","1"]
]

Output:
3

function numIslands(grid) {
    if (!grid.length) return 0;

    const rows = grid.length;
    const cols = grid[0].length;

    let islands = 0;

    function dfs(r, c) {
        if (
            r < 0 ||
            c < 0 ||
            r >= rows ||
            c >= cols ||
            grid[r][c] === "0"
        ) {
            return;
        }

        grid[r][c] = "0";

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                islands++;
                dfs(r, c);
            }
        }
    }

    return islands;
}


// Time: O(m × n)
// Space: O(m × n)


// Problem 2: Max Area of Island
// LeetCode 695

// Instead of counting islands, find the largest island size.


Input:

[
 [0,0,1,0],
 [1,1,1,0],
 [0,1,0,0]
]

Output:
5





