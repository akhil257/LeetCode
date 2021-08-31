/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let freq = new Map();
  for (let i = 0; i < s.length; i++) {
    freq.set(s[i], freq.get(s[i]) + 1 || 1);
  }
  return Math.min(...freq.values()) === Math.max(...freq.values());
};

// Runtime: 76 ms, faster than 90.42% of JavaScript online submissions for Check if All Characters Have Equal Number of Occurrences.
// Memory Usage: 40.7 MB, less than 52.09% of JavaScript online submissions for Check if All Characters Have Equal Number of Occurrences.
