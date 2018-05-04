/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let i = nums.length - 2,
        len = nums.length - 1
    while(i > 0) {
        if (nums[i] >= (len - i)) {
            len = i
        }
        i--
    }
    return nums[0] >= len
};

/**
 * 从后往前找更佳
 */