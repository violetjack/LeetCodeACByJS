/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    for (let i = 0; i <= k; i++) {
        let max = i
        for (let j = i; j < nums.length; j++) {
            if (nums[j] > nums[max]) max = j
        }
        swap(nums, i, max)
    }
    return nums[k - 1]
};

function swap(arr, a, b) {
    let tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
}

findKthLargest([3, 2, 1, 5, 6, 4], 2)