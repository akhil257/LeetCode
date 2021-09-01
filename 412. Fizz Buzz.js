/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) answer.push("FizzBuzz");
    else if (i % 3 === 0) answer.push("Fizz");
    else if (i % 5 === 0) answer.push("Buzz");
    else answer.push("" + i);
  }
  return answer;
};

//   Runtime: 164 ms, faster than 5.20% of JavaScript online submissions for Fizz Buzz.
// Memory Usage: 40.5 MB, less than 94.85% of JavaScript online submissions for Fizz Buzz.

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) =>
  Array(n)
    .fill(0)
    .map((_, i) => (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || "" + i);

//  Runtime: 109 ms, faster than 10.75% of JavaScript online submissions for Fizz Buzz.
// Memory Usage: 40.3 MB, less than 98.63% of JavaScript online submissions for Fizz Buzz.
