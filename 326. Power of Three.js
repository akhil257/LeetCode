/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return n > 0 && 1162261467 % n === 0;
};

// Runtime: 188 ms, faster than 94.83% of JavaScript online submissions for Power of Three.
// Memory Usage: 48.4 MB, less than 87.83% of JavaScript online submissions for Power of Three.
