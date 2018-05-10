/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    if (matrix.length == 0) return 0
    maxLength = 0
    cache = new Array(matrix.length)
    for (let i = 0; i < matrix.length; i++){
        let child = new Array(matrix[0].length)
        child.fill(false)
        cache[i] = child
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            dfs(matrix, i, j, 1)
        }
    }
    return maxLength
};



function dfs(matrix, i, j, len) {
    if (cache[i][j]) return
    maxLength = Math.max(maxLength, len)

    let tmp = matrix[i][j]

    if (i > 0 && tmp < matrix[i - 1][j])
        dfs(matrix, i - 1, j, len + 1)
    if (i < matrix.length - 1 && tmp < matrix[i + 1][j])
        dfs(matrix, i + 1, j, len + 1)
    if (j > 0 && tmp < matrix[i][j - 1])
        dfs(matrix, i, j - 1, len + 1)
    if (j < matrix[0].length - 1 && tmp < matrix[i][j + 1])
        dfs(matrix, i, j + 1, len + 1)

    cache[i][j] = true
}


const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

var longestIncreasingPath = function (matrix) {
    if (matrix.length == 0) return 0
    const m = matrix.length, n = matrix[0].length
    let max = 1

    let cache = new Array(m)
    for (let i = 0; i < m; i++){
        let child = new Array(n)
        child.fill(0)
        cache[i] = child
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let len = dfs(matrix, i, j, m, n, cache)
            max = Math.max(max, len)
        }
    }
    return max
}


function dfs(matrix, i, j, m, n, cache){
    if (cache[i][j] != 0) return cache[i][j]
    let max = 1
    for (let dir of dirs){
        let x = i + dir[0], y = j + dir[1]
        if(x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] <= matrix[i][j]) continue;
        let len = 1 + dfs(matrix, x, y, m, n, cache)
        max = Math.max(max, len)
    }
    cache[i][j] = max
    return max
}