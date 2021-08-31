/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const crit = s.length / 2;
  for (let i = 0; i < crit; i++) {
    let temp = s[s.length - 1 - i];
    s[s.length - 1 - i] = s[i];
    s[i] = temp;
  }

  return s;
};

// Runtime: 160 ms, faster than 18.36% of JavaScript online submissions for Reverse String.
// Memory Usage: 46.4 MB, less than 33.53% of JavaScript online submissions for Reverse String.