/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let numArr = n.toString(2).split("")
    let count = 0
    for (let val of numArr) {
        if (val == "1") {
            count++
        }
    }
    return count
};