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


function deserialize(data) {
    const values = data.split(",");
    let index = 0;

    function dfs() {
        if (values[index] === "null") {
            index++;
            return null;
        }

        const node = new TreeNode(
            Number(values[index++])
        );

        node.left = dfs();
        node.right = dfs();

        return node;
    }

    return dfs();
}


Serialize: O(n)
Deserialize: O(n)

Space: O(n)


// Problem 2: Construct Binary Tree from Preorder and Inorder Traversal
// LeetCode 105
// Example

preorder = [3,9,20,15,7]

inorder = [9,3,15,20,7]

        3
       / \
      9  20
        /  \
       15   7


function buildTree(preorder, inorder) {
    const map = new Map();

    inorder.forEach(
        (value, index) => map.set(value, index)
    );

    let preorderIndex = 0;

    function helper(left, right) {
        if (left > right) return null;

        const rootVal =
            preorder[preorderIndex++];

        const root = {
            val: rootVal,
            left: null,
            right: null
        };

        const inorderIndex =
            map.get(rootVal);

        root.left = helper(
            left,
            inorderIndex - 1
        );

        root.right = helper(
            inorderIndex + 1,
            right
        );

        return root;
    }

    return helper(0, inorder.length - 1);
}





