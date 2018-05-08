/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let ans = strs.length > 0 ? strs[0] : ""
    for (let i = 1; i < strs.length; i++) {
        if (!strs[i].startsWith(ans)) {
            for (let j = 0; j < ans.length; j++) {
                if (ans[j] != strs[i][j]) {
                    ans = ans.slice(0, j)
                }
            }
        }
    }
    return ans
};