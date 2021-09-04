/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let low = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < low) low = prices[i];
    else if (prices[i] - low > maxProfit) {
      maxProfit = prices[i] - low;
    }
  }

  return maxProfit;
};

//   Runtime: 96 ms, faster than 70.48% of JavaScript online submissions for Best Time to Buy and Sell Stock.
//   Memory Usage: 48.9 MB, less than 39.26% of JavaScript online submissions for Best Time to Buy and Sell Stock.
