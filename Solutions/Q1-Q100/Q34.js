/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let targetIndex = binarySearch(nums, target, 0, nums.length - 1)
    if (targetIndex == -1) return [-1, -1]
    let l = targetIndex, r = targetIndex
    while(l > 0 && nums[l - 1] == target){
        l--
    }
    while(r < nums.length - 1 && nums[r + 1] == target){
        r++
    }
    return [l, r]
};

function binarySearch(arr, val, lo, hi) {
    if (hi < lo) return -1
    let mid = lo + parseInt((hi - lo) / 2)

    if (val < arr[mid]) {
        return binarySearch(arr, val, lo, mid - 1)
    } else if (val > arr[mid]) {
        return binarySearch(arr, val, mid + 1, hi)
    } else {
        return mid
    }
}

let nums = [5,7,7,8,8,10], target = 9
searchRange(nums, target)