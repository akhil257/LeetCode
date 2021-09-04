/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(target - nums[i])) {
      return [hashMap.get(target - nums[i]), i];
    } else {
      hashMap.set(nums[i], i);
    }
  }
};

// Runtime: 123 ms, faster than 33.55% of JavaScript online submissions for Two Sum.
// Memory Usage: 41.2 MB, less than 19.90% of JavaScript online submissions for Two Sum.
