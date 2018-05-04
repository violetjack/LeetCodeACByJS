/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    sort(nums, 0, nums.length - 1)
};

function sort(arr, lo, hi) {
    if (hi <= lo) return
    let lt = lo, i = lo + 1, gt = hi;
    let v = arr[lo]
    while (i <= gt) {
        if (arr[i] < v) swap(arr, lt++, i++)
        else if (arr[i] > v) swap(arr, i, gt--)
        else i++
    }
    sort(arr, lo, lt - 1)
    sort(arr, gt + 1, hi)
}

function swap(arr, a, b) {
    let x = arr[a]
    arr[a] = arr[b]
    arr[b] = x
}



/**
 * 三向字符串快速排序
 */