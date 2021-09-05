/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits[digits.length - 1] !== 9) {
    digits[digits.length - 1] += 1;
    return digits;
  }

  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    if (sum < 10) {
      digits[i] = sum;
      carry = 0;
      break;
    }
    digits[i] = 0;
    carry = 1;
  }
  if (carry > 0) digits.unshift(1);

  return digits;
};

// Runtime: 64 ms, faster than 97.29% of JavaScript online submissions for Plus One.
// Memory Usage: 38.9 MB, less than 60.60% of JavaScript online submissions for Plus One.
