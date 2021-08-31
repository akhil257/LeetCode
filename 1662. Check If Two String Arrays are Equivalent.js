/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};

// Runtime: 60 ms, faster than 99.50% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
// // Memory Usage: 38.9 MB, less than 74.88% of JavaScript online submissions for Check If Two String Arrays are Equivalent
