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

