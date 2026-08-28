// Return all shortest transformation sequences.

// A transformation changes exactly one character at a time.

// Expected:

// [
//   ["hit","hot","dot","dog","cog"],
//   ["hit","hot","lot","log","cog"]
// ]
// Why this is difficult

// A normal Word Ladder is just BFS.

// Here we need:

// BFS
//  ↓
// find shortest distance
//  ↓
// preserve ALL shortest paths
//  ↓
// DFS/backtracking

// Return all shortest transformation sequences.

// A transformation changes exactly one character at a time.

// Expected:

// [
//   ["hit","hot","dot","dog","cog"],
//   ["hit","hot","lot","log","cog"]
// ]




function findLadders(beginWord, endWord, wordList) {
    const words = new Set(wordList);

    if (!words.has(endWord)) return [];

    const parents = new Map();
    const queue = [beginWord];

    parents.set(beginWord, []);

    let found = false;

    while (queue.length && !found) {
        const levelSize = queue.length;
        const visitedThisLevel = new Set();

        for (let i = 0; i < levelSize; i++) {
            const word = queue.shift();

            for (let j = 0; j < word.length; j++) {
                for (let c = 97; c <= 122; c++) {
                    const next =
                        word.slice(0, j) +
                        String.fromCharCode(c) +
                        word.slice(j + 1);

                    if (!words.has(next)) continue;

                    if (!parents.has(next)) {
                        parents.set(next, []);
                        queue.push(next);
                        visitedThisLevel.add(next);
                    }

                    parents.get(next).push(word);

                    if (next === endWord) {
                        found = true;
                    }
                }
            }
        }

        for (const word of visitedThisLevel) {
            words.delete(word);
        }
    }

    const result = [];

    function backtrack(word, path) {
        if (word === beginWord) {
            result.push([beginWord, ...path.reverse()]);
            path.reverse();
            return;
        }

        for (const parent of parents.get(word) || []) {
            path.push(word);
            backtrack(parent, path);
            path.pop();
        }
    }

    backtrack(endWord, []);

    return result;
}


// Complexity

// Let:

// N = number of words
// L = word length

// Approximately:

// Time: O(N × L × 26)
// Space: O(N × L)

// The actual output can itself be exponential, so output complexity must also be considered.








