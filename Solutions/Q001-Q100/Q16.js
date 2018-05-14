/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort(function (a, b) {
        return a - b
    })
    let minDiff = nums[nums.length - 1] - nums[0]
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j] - target
            const bs = binarySearch(nums, - sum, 0, nums.length - 1)

            if (bs != i && bs != j) {
                if (sum - nums[bs] < minDiff) {
                    minDiff = sum - nums[bs]
                }
            }
        }
    }
    return minDiff
};

function binarySearch(arr, val, lo, hi) {
    if (hi - lo == 1) {
        if (arr[hi] - val > val - arr[lo]) {
            return lo
        } else {
            return hi
        }
    }
    let mid = lo + parseInt((hi - lo) / 2)
    if (val < arr[mid]) {
        return binarySearch(arr, val, lo, mid - 1)
    } else if (val > arr[mid]) {
        return binarySearch(arr, val, mid + 1, hi)
    } else {
        return mid
    }
}

const nums = [-1, 2, 1, -4]
threeSumClosest(nums, 1)