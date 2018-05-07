/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length == 0) return 0
    let count = 0, max = 1
    for (let i = 0, len = nums.length; i < len; i++) {
        let min = i
        for (let j = i + 1; j < len; j++) {
            if (nums[j] < nums[min]) min = j
        }
        swap(nums, i, min)
        if (i != 0 && nums[i] == nums[i - 1] + 1) {
            count++
            max = Math.max(max, count)
        } else if (nums[i] == nums[i - 1]) {
            
        } else {
            count = 1
        }
    }
    return max
};

function swap(nums, a, b) {
    let x = nums[a]
    nums[a] = nums[b]
    nums[b] = x
}

console.log(longestConsecutive([1,2,0,1]))