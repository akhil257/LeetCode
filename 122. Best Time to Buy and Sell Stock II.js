/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let low = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < low) low = prices[i];
    else {
      profit += prices[i] - low;
      low = prices[i];
    }
  }

  return profit;
};

// Runtime: 64 ms, faster than 98.87% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 40.1 MB, less than 71.05% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
