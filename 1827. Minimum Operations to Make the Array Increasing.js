/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let result = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      result += nums[i - 1] - nums[i] + 1;
      nums[i] += nums[i - 1] - nums[i] + 1;
    }
  }
  return result;
};

// Runtime: 64 ms, faster than 98.81% of JavaScript online submissions for Minimum Operations to Make the Array Increasing.
// Memory Usage: 40.8 MB, less than 50.99% of JavaScript online submissions for Minimum Operations to Make the Array Increasing.
