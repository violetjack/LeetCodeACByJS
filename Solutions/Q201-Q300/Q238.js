/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length
    const res = new Array(n)
    res[0] = 1;
    // 每个数字的左边乘积
    for (let i = 1; i < n; i++) {
        // nums = [ 1, 2, 3, 4 ] => res = [ 1, 1, 2, 6 ]
        res[i] = res[i - 1] * nums[i - 1];
    }
    // 每个数字的右边乘积
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        // nums = [ 1, 2, 3, 4 ] => res = [ 1, 1, 2, 6 ]
        res[i] *= right; // 6 8 12 24
        right *= nums[i]; // 4 12 24 24
    }
    return res;
};