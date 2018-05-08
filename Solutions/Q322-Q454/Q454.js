/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    let map = new Map()
    for (let c of C) {
        for (let d of D) {
            let sum = c + d
            map.set(sum, map.get(sum) ? map.get(sum) + 1 : 1)
        }
    }
    let count = 0
    for (let a of A) {
        for (let b of B) {
            let sum = a + b
            if (map.has(-sum)) {
                count += map.get(-sum)
            }
        }
    }
    return count
};