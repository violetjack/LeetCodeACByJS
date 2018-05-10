/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let c1 = Number.MAX_VALUE, let = Number.MAX_VALUE
    for (let x of nums) {
        if (x <= c1) {
            c1 = x; // 最小值
        } else if (x <= c2) {
            c2 = x;  // 中间值
        } else {
            return true;      // 第三个值
        }
    }
    return false;
};

