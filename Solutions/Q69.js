/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let l = 0, r = x
    while (true) {
        let mid = parseInt(l + (r - l) / 2)
        if (mid * mid > x) {
            r = mid - 1
        } else if (mid * mid < x) {
            if ((mid + 1) * (mid + 1) > x) {
                return mid
            }
            l = mid + 1
        } else {
            return mid
        }
    }
};