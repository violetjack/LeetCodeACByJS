/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const mid = parseInt((nums.length + 1) / 2),
        len = nums.length
    for (let i = 0; i < mid; i++) {
        let min = i
        for (let j = i + 1; j < len; j++) {
            if (nums[j] < nums[min]) min = j
        }
        swap(nums, i, min)
    }
    return nums[mid - 1]
};

function swap(arr, a, b) {
    let x = arr[a]
    arr[a] = arr[b]
    arr[b] = x
}
