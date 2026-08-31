// Serialize and Deserialize Binary Tree

// This is a very good tree + recursion + system thinking question.

// Tree:

//        1
//       / \
//      2   3
//         / \
//        4   5

// Serialize: "1,2,null,null,3,4,null,null,5,null,null"



function serialize(root) {
    const result = [];

    function dfs(node) {
        if (!node) {
            result.push("null");
            return;
        }

        result.push(String(node.val));

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

        const node = {
            val: Number(values[index]),
            left: null,
            right: null
        };

        index++;

        node.left = dfs();
        node.right = dfs();

        return node;
    }

    return dfs();
}



// Key interview concept

// Serialization must preserve:

// structure
// +
// values

// That's why null nodes matter.









