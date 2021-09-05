/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 1;
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== prev) {
      nums[j] = nums[i];
      prev = nums[i];
      j++;
    }
  }

  return j;
};

// Runtime: 84 ms, faster than 85.68% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 41.5 MB, less than 41.17% of JavaScript online submissions for Remove Duplicates from Sorted Array.
