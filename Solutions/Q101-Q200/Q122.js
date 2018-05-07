/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let curMin = prices[0]
    for(let i = 1; i < prices.length; i++){
        if (prices[i] > curMin) {
            maxProfit += prices[i] - curMin
        }
        curMin = prices[i]
    }
    return maxProfit
};