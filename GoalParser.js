/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  result = [];
  let i = 0;
  while (i < command.length) {
    if (command[i] === "G") {
      result.push("G");
    } else {
      if (command[i + 1] === "a") {
        result.push("al");
        i += 3;
      } else {
        result.push("o");
        i++;
      }
    }
    i++;
  }
  return result.join("");
};
