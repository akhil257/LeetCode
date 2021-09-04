/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let result = [];
  let hashMap = {};
  for (val of nums1) {
    hashMap[val] = (hashMap[val] || 0) + 1;
  }

  for (val of nums2) {
    if (hashMap[val] && hashMap[val] > 0) {
      result.push(val);
      hashMap[val]--;
    }
  }
  return result;
};
