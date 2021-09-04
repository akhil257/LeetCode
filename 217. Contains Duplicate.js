/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hashSet = new Set(nums);
  return hashSet.size !== nums.length;
};
