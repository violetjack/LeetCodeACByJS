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