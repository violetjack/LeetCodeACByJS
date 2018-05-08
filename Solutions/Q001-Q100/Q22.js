let result = []

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    dfs(n, 1, 1, "(")
    return result
};


function dfs(n, sum, used, s) {
    if (s.length == 2 * n) {
        result.push(s)
        return
    }
    if (sum == 0) {
        dfs(n, sum + 1, used + 1, s + "(")
    } else if (sum == n || used == n) {
        dfs(n, sum - 1, used, s + ")")
    } else {
        dfs(n, sum + 1, used + 1, s + "(")
        dfs(n, sum - 1, used, s + ")")
    }
}

generateParenthesis(3)