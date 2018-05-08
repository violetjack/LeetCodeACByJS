/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 1) return nums.length
    let cur = nums[0]
    let index = 1
    while (index < nums.length) {
        if (cur != nums[index]) {
            cur = nums[index]
            index++
        } else {
            nums.splice(index, 1)
        }
    }
    return nums.length
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))