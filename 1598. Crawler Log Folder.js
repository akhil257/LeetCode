/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let result = 0;
  for (let i = 0; i < logs.length; i++) {
    if (logs[i] == "./") continue;
    else if (logs[i] == "../") {
      result = result && result - 1;
    } else result++;
  }
  return result;
};
