/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if (nums.length == 0) return 0
    let ans = nums[0],
        max = nums[0],
        min = nums[0]
    for (let i = 1, len = nums.length; i < len; i++) {
        if (nums[i] < 0) {
            let tmp = max
            max = min
            min = tmp
        }
        max = Math.max(nums[i], max * nums[i])
        min = Math.min(nums[i], min * nums[i])

        ans = Math.max(max, ans)
    }
    return ans
};

console.log(maxProduct([-2, 3, -4]))

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let imax = 1;
    let imin = 1
    for (let i = 0;i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = imax
            imax = imin
            imin = temp
        }
        imax = Math.max(imax * nums[i], nums[i])
        imin = Math.min(imin * nums[i], nums[i])

        max = Math.max(max, imax)
    }
    return max
};