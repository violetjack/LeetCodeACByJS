/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length == 1) return 0
    if (nums.length == 2) return nums[0] > nums[1] ? 0 : 1
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] < nums[i] && nums[i + 1] < nums[i]) return i
    }
    return 0
};