function maxSlidingWindow(nums, k) {
  if (k <= 0 || nums.length === 0) {
    return [];
  }

  const deque = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {

    // Remove elements outside the window
    while (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove smaller elements
    while (
      deque.length &&
      nums[deque[deque.length - 1]] <= nums[i]
    ) {
      deque.pop();
    }

    deque.push(i);

    // Window has reached size k
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

module.exports = {
  maxSlidingWindow
};




