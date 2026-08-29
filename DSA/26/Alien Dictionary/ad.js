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

function alienOrder(words) {
    const graph = new Map();
    const indegree = new Map();

    for (const word of words) {
        for (const char of word) {
            if (!graph.has(char)) {
                graph.set(char, []);
                indegree.set(char, 0);
            }
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        const a = words[i];
        const b = words[i + 1];

        if (a.length > b.length && a.startsWith(b)) {
            return "";
        }

        const len = Math.min(a.length, b.length);

        for (let j = 0; j < len; j++) {
            if (a[j] !== b[j]) {
                if (!graph.get(a[j]).includes(b[j])) {
                    graph.get(a[j]).push(b[j]);
                    indegree.set(
                        b[j],
                        indegree.get(b[j]) + 1
                    );
                }

                break;
            }
        }
    }

    const queue = [];

    for (const [char, degree] of indegree) {
        if (degree === 0) {
            queue.push(char);
        }
    }

    let result = "";

    while (queue.length) {
        const char = queue.shift();

        result += char;

        for (const next of graph.get(char)) {
            indegree.set(
                next,
                indegree.get(next) - 1
            );

            if (indegree.get(next) === 0) {
                queue.push(next);
            }
        }
    }

    return result.length === graph.size ? result : "";
}









