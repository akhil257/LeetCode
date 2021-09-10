/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let result = 0;
  for (let i = 1; n >= 5 ** i; i++) {
    result += Math.floor(n / 5 ** i);
  }
  return result;
};

// Runtime: 84 ms, faster than 51.64% of JavaScript online submissions for Factorial Trailing Zeroes.
// Memory Usage: 40 MB, less than 89.45% of JavaScript online submissions for Factorial Trailing Zeroes.
