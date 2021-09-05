/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let result = [0];
  let base = 1;

  for (let i = 1; i <= n; i++) {
    if (i === 2 * base) {
      base = i;
      result.push(1);
    } else {
      result.push(1 + result[i - base]);
    }
  }
  return result;
};

// Runtime: 84 ms, faster than 98.58% of JavaScript online submissions for Counting Bits.
// Memory Usage: 45.4 MB, less than 41.93% of JavaScript online submissions for Counting Bits.

//Another solution
var countBits = function (num) {
  const dp = [0];

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) dp[i] = dp[i / 2];
    else dp[i] = dp[i - 1] + 1;
  }
  return dp;
};
