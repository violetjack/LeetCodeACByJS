/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    nums.sort(function (a, b) {
        return a - b
    })
    let index = 0
    let val = 0
    while (index < nums.length) {
        if (nums[index] <= 0) {
            index++
            continue
        }
        if (nums[index] == val + 1) {
            val = val + 1
        }
        if (nums[index] != val) {
            return val + 1
        }
        index++
    }
    return nums.length > 0 ? nums[nums.length - 1] + 1 : 1
};

console.log(firstMissingPositive([3, 4, -1, 1]))