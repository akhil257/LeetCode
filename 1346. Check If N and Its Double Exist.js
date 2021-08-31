/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let hashSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (hashSet.has(arr[i] * 2) || hashSet.has(arr[i] / 2)) {
      return true;
    } else {
      hashSet.add(arr[i]);
    }
  }
  return false;
};
