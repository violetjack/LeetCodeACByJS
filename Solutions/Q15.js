/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort(function (a, b) {
        return a - b
    })
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j]
            const bs = binarySearch(nums, - sum, 0, nums.length - 1)
            if (bs != null && bs != i && bs != j) {
                let mArr = [nums[i], nums[j], nums[bs]].sort(function (a, b) {
                    return a - b
                })
                if (!has(ans, mArr)) {
                    ans.push(mArr)
                }
            }
        }
    }
    return ans
};

function binarySearch(arr, val, lo, hi) {
    if (lo > hi) return null
    let mid = lo + parseInt((hi - lo) / 2)
    if (val < arr[mid]) {
        return binarySearch(arr, val, lo, mid - 1)
    } else if (val > arr[mid]) {
        return binarySearch(arr, val, mid + 1, hi)
    } else {
        return mid
    }
}

function has(arr, target) {
    for (let cur of arr) {
        let isEqual = true
        for (let i = 0; i < target.length; i++) {
            if (cur[i] != target[i]) {
                isEqual = false
            }
        }
        if (isEqual) return true
    }
    return false
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum2 = function (nums) {
    nums.sort(function (a, b) {
        return a - b
    })
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }
        let j = i + 1, k = nums.length - 1
        let target = -nums[i]
        while (j < k) {
            if (nums[j] + nums[k] == target) {
                ans.push([nums[i], nums[j], nums[k]])
                j++
                k--
                while (j < k && nums[j] == nums[j - 1]) j++
                while (j < k && nums[k] == nums[k + 1]) k--
            } else if (nums[j] + nums[k] > target) {
                k--
            } else {
                j++
            }
        }
    }
    return ans
};

console.log(threeSum2([-2, 0, 0, 2, 2]))