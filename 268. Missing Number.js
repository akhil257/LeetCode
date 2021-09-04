/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = nums.reduce((a, elm) => a + elm, 0);
  console.log(sum);
  let formulaSum = (nums.length * (nums.length + 1)) / 2;
  return formulaSum - sum;
};

var missingNumber = function (nums) {
  let sum = nums.length;
  for (let i = 0; i < nums.length; i++) {
    sum += i - nums[i];
  }

  return sum;
};

// Runtime: 101 ms, faster than 29.99% of JavaScript online submissions for Missing Number.
// Memory Usage: 40.6 MB, less than 96.31% of JavaScript online submissions for Missing Number.
