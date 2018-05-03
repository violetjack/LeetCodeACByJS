/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0, right = height.length - 1
    let count = 0
    let leftMax = 0, rightMax = 0
    while (left <= right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        if (leftMax < rightMax) {
            count += leftMax - height[left]
            left++
        } else {
            count += rightMax - height[right]
            right--
        }
    }
    return count
};