/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let counter = 0;
  let index = 0;
  if (ruleKey === "color") index = 1;
  else if (ruleKey === "name") index = 2;
  for (let i = 0; i < items.length; i++) {
    if (items[i][index] === ruleValue) counter++;
  }
  return counter;
};

// Runtime: 84 ms, faster than 85.53% of JavaScript online submissions for Count Items Matching a Rule.
// Memory Usage: 42.4 MB, less than 61.65% of JavaScript online submissions for Count Items Matching a Rule.
