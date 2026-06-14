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

heights = [2,1,5,6,2,3]

Output = 10


5 × 2 = 10


function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;

    heights.push(0);

    for (let i = 0; i < heights.length; i++) {

        while (
            stack.length &&
            heights[i] <
                heights[stack[stack.length - 1]]
        ) {

            const h =
                heights[stack.pop()];

            const width =
                stack.length === 0
                    ? i
                    : i -
                      stack[stack.length - 1] -
                      1;

            maxArea = Math.max(
                maxArea,
                h * width
            );
        }

        stack.push(i);
    }

    return maxArea;
}


Time: O(n)
Space: O(n)



// | Topic               | Representative Problem      | Pattern             |
// | ------------------- | --------------------------- | ------------------- |
// | Tree Serialization  | Serialize Binary Tree       | DFS                 |
// | Tree Reconstruction | Build Tree from Traversals  | HashMap + Recursion |
// | Water Problems      | Trapping Rain Water         | Two Pointers        |
// | Stack Problems      | Largest Rectangle Histogram | Monotonic Stack     |
// | Sliding Window      | Sliding Window Maximum      | Deque               |
// | Array Optimization  | Container With Most Water   | Two Pointers        |




