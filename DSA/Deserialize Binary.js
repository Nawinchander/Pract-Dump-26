// Serialize / Deserialize Binary Tree — 2 FAANG-Level Problems

// These problems test:

// Trees
// DFS
// BFS
// Recursion
// String Encoding
// Tree Reconstruction



// Problem 1: Serialize and Deserialize Binary Tree
// LeetCode 297 (Hard)

// Design an algorithm to convert a binary tree into a string and reconstruct it back.

        1
       / \
      2   3
         / \
        4   5


"1,2,null,null,3,4,null,null,5,null,null"


class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


function serialize(root) {
    const result = [];

    function dfs(node) {
        if (!node) {
            result.push("null");
            return;
        }

        result.push(node.val);

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return result.join(",");
}





