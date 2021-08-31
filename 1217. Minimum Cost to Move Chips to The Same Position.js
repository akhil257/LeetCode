/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let even_count = 0;
  let odd_count = 0;

  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) even_count++;
    else odd_count++;
  }
  return Math.min(even_count, odd_count);
};

// Runtime: 68 ms, faster than 78.05% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
// Memory Usage: 39.1 MB, less than 7.32% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
