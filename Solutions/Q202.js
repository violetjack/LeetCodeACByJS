/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let slow = n, fast = n

    do {
        slow = digitSquareSum(slow)
        fast = digitSquareSum(fast)
        fast = digitSquareSum(fast)
    } while (slow != fast)

    return slow == 1
};

function digitSquareSum(n) {
    let numStr = n + ""
    let sum = 0
    for (let val of numStr) {
        sum += parseInt(val) * parseInt(val)
    }
    return sum
}

isHappy(19)