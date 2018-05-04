/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n == 0) return 1
    if (n < 0) {
        n = -n
        x = 1 / x
    }
    return (n % 2 == 0) ? pow(x * x, parseInt(n / 2)) : x * pow(x * x, parseInt(n / 2));
};