/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
      }
    }
  }
  this.k = k
  this.nums = nums
}

function binarySearch(arr, val, lo, hi) {
    if (hi < lo) return lo
    let mid = lo + parseInt((hi - lo) / 2)
    if (val > arr[mid]) {
        return binarySearch(arr, val, lo, mid - 1)
    } else if (val < arr[mid]) {
        return binarySearch(arr, val, mid + 1, hi)
    } else {
        return mid
    }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  const mid = binarySearch(this.nums, val, 0, this.nums.length - 1)
  this.nums.splice(mid, 0, val)
  return this.nums[this.k - 1]
}

var obj = new KthLargest(3, [9,5,7,1, -1])
var param_1 = obj.add(3)
var param_2 = obj.add(5)
var param_3 = obj.add(10)
var param_4 = obj.add(8)
