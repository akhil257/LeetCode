/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "" + 1;

  let prev = countAndSay(n - 1);
  let result = "";
  let temp = prev[0];
  let count = 0;
  for (let i = 0; i < prev.length; i++) {
    if (prev[i] === temp) {
      count++;
    } else {
      result += "" + count + "" + temp;
      count = 1;
      temp = prev[i];
    }
  }
  result += "" + count + "" + prev[prev.length - 1];
  return result;
};

// Runtime: 80 ms, faster than 58.24% of JavaScript online submissions for Count and Say.
// Memory Usage: 41.8 MB, less than 20.45% of JavaScript online submissions for Count and Say.
