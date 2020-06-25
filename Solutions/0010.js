
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let dp = []
    for (let i = 0; i <= s.length; i++) {
        let child = []
        for (let j = 0; j <= p.length; j++) {
            child.push(false)
        }
        dp.push(child)
    }
    dp[s.length][p.length] = true

    for (let i = s.length; i >= 0; i--) {
        for (let j = p.length - 1; j >= 0; j--) {
            let first_match = (i < s.length && (p[j] == s[i] || p[j] == "."))
            if (j + 1 < p.length && p[j + 1] == "*"){
                dp[i][j] = dp[i][j + 2] || first_match && dp[i + 1][j]
            } else {
                dp[i][j] = first_match && dp[i + 1][j + 1]
            }
        }
    }
    console.log(dp)
    return dp[0][0]
};

console.log(isMatch("aab", "c*a*b"))

/**
先设定右下角为 false

[
    true, false, true, false, false, false,
    true, false, true, false, false, false,
    true, false, true, false, true, false,
    false, false, false, false, false, true
]
 */