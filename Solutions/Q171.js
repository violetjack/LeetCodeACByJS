/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    var ans = 0
    var len = s.length
    for (let i = 0; i < len; i++) {
        ans += (s[i].charCodeAt(0) - 64) * (Math.pow(26, len - 1 - i))
    }
    return ans
};