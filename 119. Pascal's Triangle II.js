/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let result = [1];
  if (rowIndex === 0) return result;
  for (let i = 1; i <= rowIndex; i++) {
    const seqRow = [1];

    for (let j = 0; j < result.length - 1; j++) {
      seqRow.push(result[j] + result[j + 1]);
    }
    seqRow.push(1);
    result = seqRow;
  }
  return result;
};

//   Runtime: 60 ms, faster than 99.15% of JavaScript online submissions for Pascal's Triangle II.
// Memory Usage: 39 MB, less than 45.81% of JavaScript online submissions for Pascal's Triangle II.
