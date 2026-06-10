// rain water

Two Pointers
Monotonic Stack
Prefix Arrays
Greedy

// Problem 3: Trapping Rain Water
// LeetCode 42 (Hard)

// Given elevation heights, compute how much rainwater can be trapped.


height =

[0,1,0,2,1,0,1,3,2,1,2,1]

Answer = 6


function trap(height) {
    let left = 0;
    let right = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    let water = 0;

    while (left < right) {

        if (height[left] < height[right]) {

            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water +=
                    leftMax - height[left];
            }

            left++;
        } else {

            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water +=
                    rightMax - height[right];
            }

            right--;
        }
    }

    return water;
}


Time: O(n)
Space: O(1)


// Problem 4: Largest Rectangle in Histogram
// LeetCode 84 (Hard)

// Find the area of the largest rectangle.







