/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length == 0) return false
    let row = 0, col = matrix[0].length - 1
    while (true) {
        if (matrix[row][col] > target && col > 0) {
            col--
        } else if (matrix[row][col] < target && row < matrix.length - 1) {
            row++
        } else if (matrix[row][col] == target) {
            return true
        } else {
            break
        }
    }
    return false
};