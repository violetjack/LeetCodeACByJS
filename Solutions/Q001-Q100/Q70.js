// let count = 0

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//     count = 0
//     find(0, n)
//     return count
// };

// function find(step, n) {
//     if (step == n) {
//         count++
//         return
//     }
//     find(step + 1, n)
//     if (step + 2 <= n) {
//         find(step + 2, n)
//     }
// }


var climbStairs = function (n) {
    let dp = new Array(n)
    dp[0] = 1
    dp[1] = 2
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n - 1]
};