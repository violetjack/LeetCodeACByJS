/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let countObj = {}
    for (let c of s) {
        if (countObj[c]) {
            countObj[c]++
        } else {
            countObj[c] = 1
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (countObj[s[i]] == 1) {
            return i
        }
    }
    return -1
};

console.log(firstUniqChar("z"))