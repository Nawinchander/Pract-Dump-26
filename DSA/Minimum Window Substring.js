function minWindow(s, t) {
    if (t.length > s.length) return "";

    const need = new Map();

    for (const char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    const window = new Map();

    let left = 0;
    let formed = 0;

    const required = need.size;

    let bestStart = 0;
    let bestLength = Infinity;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        window.set(
            char,
            (window.get(char) || 0) + 1
        );

        if (
            need.has(char) &&
            window.get(char) === need.get(char)
        ) {
            formed++;
        }

        while (formed === required) {
            const length = right - left + 1;

            if (length < bestLength) {
                bestLength = length;
                bestStart = left;
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
                formed--;
            }

            left++;
        }
    }

    return bestLength === Infinity
        ? ""
        : s.substring(
            bestStart,
            bestStart + bestLength
        );
}




// Dry Run
// s = ADOBECODEBANC
// t = ABC

// Eventually we get:

// ADOBEC

// It contains:

// A
// B
// C

// Now shrink:

// DOBEC

// Still valid.

// Continue expanding and shrinking.

// Eventually:


// BANC

// is the smallest valid window.

// Therefore:

// "BANC"

Complexity
Time:  O(n)
Space: O(k)

// where k is the number of distinct characters.

// FAANG takeaway

// When you see:

// "smallest/largest substring satisfying a condition"

// Immediately consider:

// Sliding Window
// +
// Frequency Map
// +
// Two Pointers





