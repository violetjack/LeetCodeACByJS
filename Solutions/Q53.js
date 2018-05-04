/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let count = nums[0], maxCount = nums[0]
    for (let i = 1; i < nums.length; i++) {
        count = Math.max(count + nums[i], nums[i])
        maxCount = Math.max(maxCount, count)    
    }
    return maxCount
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))