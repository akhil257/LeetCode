/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  return 2 ** 31 % n === 0;

  // let i= n&(n-1)
  // return i===0
};

// Runtime: 80 ms, faster than 91.61% of JavaScript online submissions for Power of Two.
// Memory Usage: 40.2 MB, less than 76.34% of JavaScript online submissions for Power of Two.
