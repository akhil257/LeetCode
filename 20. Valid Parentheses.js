/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 0) return true;
  if (s.length % 2 !== 0) return false;
  if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false;

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
    else {
      let temp = stack.pop();
      if (s[i] === "}" && temp === "{") continue;
      else if (s[i] === "]" && temp === "[") continue;
      else if (s[i] === ")" && temp === "(") continue;
      else return false;
    }
  }

  if (stack.length > 0) return false;
  return true;
};

//   Runtime: 82 ms, faster than 51.26% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 40.2 MB, less than 26.17% of JavaScript online submissions for Valid Parentheses.
