/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let count = 0;
    while (n != 0) {
        let tmp = parseInt(n / 5)
        count += tmp;
        n = tmp;
    }
    return count;
};