/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let firstMax = 0;
  let secondMax = 0;

  let firstMin = Math.min();
  let secondMin = Math.min();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstMax) {
      secondMax = firstMax;
      firstMax = nums[i];
    } else if (nums[i] > secondMax) {
      secondMax = nums[i];
    }
    if (nums[i] < firstMin) {
      secondMin = firstMin;
      firstMin = nums[i];
    } else if (nums[i] < secondMin) {
      secondMin = nums[i];
    }
  }
  return firstMax * secondMax - firstMin * secondMin;
};

// Runtime: 76 ms, faster than 96.94% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
// Memory Usage: 41.6 MB, less than 51.95% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
