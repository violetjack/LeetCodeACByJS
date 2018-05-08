/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let num = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) continue
        let min = i
        for (let j = i; j < nums.length; j++) {
            if (nums[j] < nums[min] && nums[j] >= 0)
                min = j
        }
        if (nums[min] == num)
            num++
        else
            return num
        swap(nums, i, min)
    }
    return num
};

function swap(nums, a, b) {
    let tmp = nums[a]
    nums[a] = nums[b]
    nums[b] = tmp
}

missingNumber([3, 0, 1])