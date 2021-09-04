/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let mapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let i = s.length - 1;
  let result = 0;
  while (i >= 0) {
    if (mapping[s[i]] > mapping[s[i - 1]]) {
      result += mapping[s[i]] - mapping[s[i - 1]];
      i--;
    } else {
      result += mapping[s[i]];
    }
    i--;
  }
  return result;
};

// Runtime: 198 ms, faster than 22.43% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 45.1 MB, less than 49.53% of JavaScript online submissions for Roman to Integer.
