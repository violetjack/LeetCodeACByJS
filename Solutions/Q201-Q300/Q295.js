/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    let index = binarySearch(this.arr, num, 0, this.arr.length)
    this.arr.splice(index, 0, num)
};

function binarySearch(arr, val, lo, hi) {
    if (hi < lo) return lo
    let mid = lo + parseInt((hi - lo) / 2)
    console.log("范围", lo + "-" + hi)
    console.log("中间值", mid + ":" + arr[mid])
    if (val < arr[mid]) {
        return binarySearch(arr, val, lo, mid - 1)
    } else if (val > arr[mid]) {
        return binarySearch(arr, val, mid + 1, hi)
    } else {
        return mid
    }
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.arr.length % 2 == 0) {
        let mid = this.arr.length / 2
        return (this.arr[mid - 1] + this.arr[mid]) / 2
    } else {
        let mid = (this.arr.length - 1) / 2
        return this.arr[mid]
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const mf = new MedianFinder()
mf.addNum(-1)
mf.findMedian()
mf.addNum(-2)
mf.findMedian()
mf.addNum(-3)
mf.findMedian()
mf.addNum(-4)
mf.findMedian()