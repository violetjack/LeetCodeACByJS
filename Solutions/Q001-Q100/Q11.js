/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0
    let left = 0,right = height.length - 1
    while(left < right){
        maxArea = Math.max(maxArea, (Math.min(height[left], height[right]) * (right - left)))
        if (height[left] < height[right]){
            left++
        }else {
            right--
        }
    }
    return maxArea
};

const arr = [3, 4, 6, 2, 8, 4, 3, 1, 3, 4, 4]
console.log(maxArea(arr))