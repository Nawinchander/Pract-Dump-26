// Longest Increasing Subsequence — O(n log n)

// Input:

// [10,9,2,5,3,7,101,18]

// Answer:

// 4

// Example:

// 2 → 3 → 7 → 101
// Important insight

// Don't store the actual subsequence.

// Maintain

// tails[i] =
// smallest possible ending value
// of an increasing subsequence of length i + 1



function lengthOfLIS(nums) {
    const tails = [];

    for (const num of nums) {
        let left = 0;
        let right = tails.length;

        while (left < right) {
            const mid = Math.floor(
                (left + right) / 2
            );

            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        tails[left] = num;
    }

    return tails.length;
}



// Complexity
// Time: O(n log n)
// Space: O(n)
// FAANG insight

// Whenever you see:

// Longest Increasing Subsequence

// Know both:

// O(n²) DP

// and

// O(n log n) binary search





