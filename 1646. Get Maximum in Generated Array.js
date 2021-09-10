/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  let memo = [0, 1];
  let max = 1;
  if (n === 0 || n === 1) return memo[n];
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      memo.push(memo[i / 2]);
    } else {
      let v = memo[(i - 1) / 2] + memo[(i + 1) / 2];
      memo.push(v);
      if (v > max) max = v;
    }
  }

  return max;
};

// Runtime: 68 ms, faster than 93.48% of JavaScript online submissions for Get Maximum in Generated Array.
// Memory Usage: 38.8 MB, less than 62.61% of JavaScript online submissions for Get Maximum in Generated Array.
