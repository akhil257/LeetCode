/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let result = 0;

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    result +=
      (columnTitle.charCodeAt(i) - 64) * 26 ** (columnTitle.length - i - 1);
  }

  return result;
};

//   Runtime: 148 ms, faster than 16.49% of JavaScript online submissions for Excel Sheet Column Number.
// Memory Usage: 40 MB, less than 92.58% of JavaScript online submissions for Excel Sheet Column Number.
