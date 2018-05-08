/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let dp = new Array(n + 1)
    dp.fill(Number.MAX_VALUE)
    dp[0] = 0
    for (let i = 0; i <= n; i++) {
        for (let j = 1; i + j * j <= n; j++) {
            dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1)
        }
    }
    return dp[n]
};