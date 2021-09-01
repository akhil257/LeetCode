/**
 * @param {number[]} nums
 * @return {number}
 */

// hint: a^0 = a, a^a=0

var singleNumber = function (nums) {
  let ans = 0;
  for (val of nums) ans = ans ^ val;
  return ans;
};

// Runtime: 76 ms, faster than 90.85% of JavaScript online submissions for Single Number.
// Memory Usage: 41.6 MB, less than 70.51% of JavaScript online submissions for Single Number.
