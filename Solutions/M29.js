/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let index = [0, 0]
    const left = [0, -1]
    const right = [0, 1]
    const top = [-1, 0]
    const button = [1, 0]
    let direction = right
    const ans = []
    while (matrix[index[0]] !== undefined && matrix[index[0]][index[1]] !== undefined) {
        ans.push(matrix[index[0]][index[1]])
        matrix[index[0]][index[1]] = undefined
        if (index[0] + direction[0] >= matrix.length || matrix[index[0] + direction[0]][index[1] + direction[1]] === undefined) {
            if (direction === right) {
                direction = button
            } else if (direction === button) {
                direction = left
            } else if (direction === left) {
                direction = top
            } else if (direction === top) {
                direction = right
            }
        }
        index = [index[0] + direction[0], index[1] + direction[1]]
    }
    return ans
};

matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(spiralOrder(matrix))