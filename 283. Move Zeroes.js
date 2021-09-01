/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let firstZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[firstZero]] = [0, nums[i]];
      firstZero++;
    }
  }

  return nums;
};

// Runtime: 124 ms, faster than 11.49% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 40.5 MB, less than 42.59% of JavaScript online submissions for Move Zeroes.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[j++] = nums[i];
    }
  }
  while (j < nums.length) {
    nums[j++] = 0;
  }

  return nums;
};

// Runtime: 100 ms, faster than 20.97% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 40.4 MB, less than 57.43% of JavaScript online submissions for Move Zeroes.
