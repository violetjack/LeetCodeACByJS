/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function (points) {
    if (points.length == 0) return 0
    let maxLength = 1
    for (let i = 0; i < points.length; i++) {
        let degs = {}
        let samplePoint = 1
        for (let j = 0; j < points.length; j++) {
            if (i == j) continue
            if (points[i].x == points[j].x && points[i].y == points[j].y) {
                samplePoint++
                continue
            }
            let deg
            if (points[j].y == points[i].y)
                deg = Number.MAX_SAFE_INTEGER
            else
                deg = (points[j].x - points[i].x) / (points[j].y - points[i].y)

            if (degs[deg]) degs[deg]++
            else degs[deg] = 1
        }
        maxLength = Math.max(maxLength, samplePoint)
        for (let k in degs) {
            maxLength = Math.max(maxLength, degs[k] + samplePoint)
        }
    }
    return maxLength
};

function Point(x, y) {
    this.x = x
    this.y = y
}

const p1 = new Point(0, 0)
const p2 = new Point(1, 1)
const p3 = new Point(0, 0)

console.log(maxPoints([p1, p2, p3]))