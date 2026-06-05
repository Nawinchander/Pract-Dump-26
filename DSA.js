// Minimum Window Substring (Hard)

// Problem

// Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.

// If no such window exists, return an empty string.

// Example

Input:
s = "ADOBECODEBANC"
t = "ABC"

Output:
"BANC"


Time: O(n)
Space: O(k)

function minWindow(s, t) {
    if (!s || !t) return "";

    const need = new Map();

    for (const char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let left = 0;
    let matched = 0;

    const window = new Map();

    let minLength = Infinity;
    let start = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        window.set(char, (window.get(char) || 0) + 1);

        if (
            need.has(char) &&
            window.get(char) === need.get(char)
        ) {
            matched++;
        }

        while (matched === need.size) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                start = left;
            }

            const leftChar = s[left];

            window.set(
                leftChar,
                window.get(leftChar) - 1
            );

            if (
                need.has(leftChar) &&
                window.get(leftChar) < need.get(leftChar)
            ) {
                matched--;
            }

            left++;
        }
    }

    return minLength === Infinity
        ? ""
        : s.substring(start, start + minLength);
}


// 2 problem -  Alien Dictionary (Hard)
// Problem

// There is a new alien language.

// You are given a sorted dictionary of words according to the alien language.

// Return the order of characters.

// If no valid order exists, return "".



Input:

[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

Output:

"wertf"


Time: O(V + E)
Space: O(V + E)


function alienOrder(words) {
    const graph = new Map();
    const indegree = new Map();

    for (const word of words) {
        for (const char of word) {
            if (!graph.has(char)) {
                graph.set(char, []);
            }

            if (!indegree.has(char)) {
                indegree.set(char, 0);
            }
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];

        if (
            w1.length > w2.length &&
            w1.startsWith(w2)
        ) {
            return "";
        }

        const minLen = Math.min(
            w1.length,
            w2.length
        );

        for (let j = 0; j < minLen; j++) {
            if (w1[j] !== w2[j]) {
                graph.get(w1[j]).push(w2[j]);
                indegree.set(
                    w2[j],
                    indegree.get(w2[j]) + 1
                );
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

        for (const neighbor of graph.get(char)) {
            indegree.set(
                neighbor,
                indegree.get(neighbor) - 1
            );

            if (indegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }

    return result.length === indegree.size
        ? result
        : "";
}



