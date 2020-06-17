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


var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ''
    let ansIndex = 0
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
           if(str[j][i] !== char) {
            ansIndex = i - 1
            break
           }
        }
    }
    return strs[0].substring(0, ansIndex)
}