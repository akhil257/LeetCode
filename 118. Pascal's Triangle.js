/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [[1]];
  if (numRows.length === 1) return result;
  for (let i = 1; i < numRows; i++) {
    const seqRow = [1];
    const prev = result[i - 1];
    for (let j = 0; j < prev.length - 1; j++) {
      seqRow.push(prev[j] + prev[j + 1]);
    }
    seqRow.push(1);
    result.push(seqRow);
  }
  return result;
};

// Runtime: 75 ms, faster than 44.76% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 38.2 MB, less than 93.65% of JavaScript online submissions for Pascal's Triangle.
