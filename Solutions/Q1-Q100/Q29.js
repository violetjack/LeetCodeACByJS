/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let sign = 1
    if (dividend < 0) {
        sign = -sign
        dividend = -dividend
    }
    if (divisor < 0) {
        sign = -sign
        divisor = -divisor
    }

    if (divisor == 0 || dividend < divisor) return 0

    num = sign * ldivide(dividend, divisor)

    let max = 1
    for (let i = 0; i < 31; i++) {
        max *= 2
    }
    if (num > max - 1) return max - 1
    if (num < -max) return -max
    return num
};

function ldivide(dividend, divisor) {
    if (dividend < divisor) return 0;
    let sum = divisor
    let num = 1
    while (sum + sum <= dividend) {
        sum += sum
        num += num
    }
    return num + ldivide(dividend - sum, divisor)
}

console.log(divide(-1, 1))

1