/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let hashMap = {};
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = (hashMap[nums[i]] || 1) + 1;
    if (hashMap[nums[i]] > hashMap[max]) {
      max = nums[i];
    }
  }
  return max;
};

var majorityElement = function (nums) {
  let count = 1;
  let currMajor = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) currMajor = nums[i];

    if (nums[i] === currMajor) {
      count++;
    } else {
      count--;
    }
  }
  return currMajor;
};

// Runtime: 85 ms, faster than 33.46% of JavaScript online submissions for Majority Element.
// Memory Usage: 40.5 MB, less than 98.98% of JavaScript online submissions for Majority Element.
