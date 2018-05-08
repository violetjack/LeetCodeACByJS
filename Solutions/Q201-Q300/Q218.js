/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
    const heights = []
    const result = []
    for (let item of buildings) {
        heights.push([item[0], -item[2]])
        heights.push([item[1], item[2]])
    }
    heights.sort((a, b) => {
        if (a[0] == b[0]) return a[1] - b[1]
        else return a[0] - b[0]
    })
    let maxStack = [0]
    let preHeight = 0
    for (let h of heights) {
        if (h[1] < 0) {
            maxStack.push(-h[1])
        } else {
            for (let i = 0; i < maxStack.length; i++) {
                if (maxStack[i] == h[1]) {
                    maxStack.splice(i, 1)
                    break
                }
            }
        }
        let curHeight = Math.max(...maxStack)
        if (preHeight != curHeight) {
            result.push([h[0], curHeight])
            preHeight = curHeight
        }
    }
    return result
};

console.log(getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]))