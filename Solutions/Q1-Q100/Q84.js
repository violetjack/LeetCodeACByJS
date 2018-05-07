/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0
    for (let i = 0; i < heights.length; i++) {
        let l = i, r = i, height = heights[i]
        while (l > 0) {
            if (heights[l - 1] >= height) {
                l--
            } else {
                break
            }
        }
        while (r < heights.length - 1) {
            if (heights[r + 1] >= height) {
                r++
            } else {
                break
            }
        }
        maxArea = Math.max(maxArea, (r - l + 1) * height)
    }
    return maxArea
};

largestRectangleArea([2,1,5,6,2,3])