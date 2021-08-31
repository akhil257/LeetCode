/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);
  result = [];

  for (elm of [...nums1]) {
    if (nums2.has(elm)) result.push(elm);
  }

  return result;
};
