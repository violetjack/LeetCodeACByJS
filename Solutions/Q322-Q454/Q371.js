/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    if (b == 0) {//没有进为的时候完成运算
        return a;
    }
    let sum, carry;
    sum = a ^ b; // 进行异或计算
    carry = (a & b) << 1; // 与计算并向左移一位
    return getSum(sum, carry);
};