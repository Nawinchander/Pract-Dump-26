// BFS
// Shortest Path
// Graphs
// Sets
// Bi-directional BFS


// Word Ladder
// LeetCode 127 (Hard)

// Transform beginWord into endWord.

// Only one character may change at a time.

// Every intermediate word must exist in the dictionary.

// Return the minimum number of transformations.

beginWord = "hit"

endWord = "cog"

wordList =
["hot","dot","dog","lot","log","cog"]

Output:
5

// hit → hot → dot → dog → cog

function ladderLength(
    beginWord,
    endWord,
    wordList
) {
    const wordSet = new Set(wordList);

    if (!wordSet.has(endWord))
        return 0;

    const queue = [[beginWord, 1]];

    while (queue.length) {
        const [word, steps] =
            queue.shift();

        if (word === endWord)
            return steps;

        for (let i = 0; i < word.length; i++) {

            for (
                let c = 97;
                c <= 122;
                c++
            ) {

                const newWord =
                    word.slice(0, i) +
                    String.fromCharCode(c) +
                    word.slice(i + 1);

                if (wordSet.has(newWord)) {

                    queue.push([
                        newWord,
                        steps + 1
                    ]);

                    wordSet.delete(
                        newWord
                    );
                }
            }
        }
    }

    return 0;
}



Time: O(N × M × 26)

N = words
M = word length


// Word Ladder II
// LeetCode 126 (Hard)

// Return all shortest transformation sequences.


Input:

beginWord = "hit"
endWord = "cog"

wordList =
["hot","dot","dog","lot","log","cog"]

Output:

[
["hit","hot","dot","dog","cog"],
["hit","hot","lot","log","cog"]
]


function findLadders(
    beginWord,
    endWord,
    wordList
) {
    const wordSet = new Set(wordList);

    if (!wordSet.has(endWord))
        return [];

    const queue = [[beginWord]];
    const result = [];

    let visited = new Set();

    while (
        queue.length &&
        result.length === 0
    ) {

        const size = queue.length;
        const levelVisited = new Set();

        for (
            let k = 0;
            k < size;
            k++
        ) {

            const path =
                queue.shift();

            const word =
                path[path.length - 1];

            if (word === endWord) {
                result.push(path);
            }

            for (
                let i = 0;
                i < word.length;
                i++
            ) {

                for (
                    let c = 97;
                    c <= 122;
                    c++
                ) {

                    const nextWord =
                        word.slice(0, i) +
                        String.fromCharCode(c) +
                        word.slice(i + 1);

                    if (
                        wordSet.has(nextWord) &&
                        !visited.has(nextWord)
                    ) {

                        levelVisited.add(
                            nextWord
                        );

                        queue.push([
                            ...path,
                            nextWord
                        ]);
                    }
                }
            }
        }

        for (const word of levelVisited) {
            visited.add(word);
        }
    }

    return result;
}








