/**
 * @param {number} n
 * @return {number}
 */

var tribonacci = function (x) {
  let memo = [0, 1, 1];

  function helper(n) {
    if (memo[n] > -1) return memo[n];

    memo[n] = helper(n - 3) + helper(n - 2) + helper(n - 1);
    return memo[n];
  }

  return helper(x);
};

// Runtime: 64 ms, faster than 95.18% of JavaScript online submissions for N-th Tribonacci Number.
// Memory Usage: 38.7 MB, less than 32.93% of JavaScript online submissions for N-th Tribonacci Number.
