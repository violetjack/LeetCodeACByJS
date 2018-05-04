/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if(matrix.length == 0) return []
    let ans = []
    ans.push(matrix[0][0])
    matrix[0][0] = null

    let i = 0, j = 0
    const width = matrix[0].length, height = matrix.length
    let status = "right"
    let count = 0
    while (count < width * height - 1) {
        if (status == "right") {
            if (j < width - 1 && matrix[i][j + 1] != null) {
                ans.push(matrix[i][j + 1])
                matrix[i][j + 1] = null
                j++
                count++
            } else {
                status = "down"
            }
        } else if (status == "down") {
            if (i < height - 1 && matrix[i + 1][j] != null) {
                ans.push(matrix[i + 1][j])
                matrix[i + 1][j] = null
                i++
                count++
            } else {
                status = "left"
            }
        } else if (status == "left") {
            if (j > 0 && matrix[i][j - 1] != null) {
                ans.push(matrix[i][j - 1])
                matrix[i][j - 1] = null
                j--
                count++
            } else {
                status = "up"
            }
        } else {
            if (i > 0 && matrix[i - 1][j] != null) {
                ans.push(matrix[i - 1][j])
                matrix[i - 1][j] = null
                i--
                count++
            } else {
                status = "right"
            }
        }
    }
    return ans
};

/**
 * TOOD 本方案思路是对的，就是写的非常之不优雅，需要改进。
 */