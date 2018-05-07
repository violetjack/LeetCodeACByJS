/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (grid.length == 0) return 0
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                count++
                helper(i, j, grid)
            }
        }
    }
    return count
};

function helper(i, j, grid) {
    grid[i][j] = "OK"
    if (i > 0 && grid[i - 1][j] == 1) // 上
        helper(i - 1, j, grid)
    if (i < grid.length - 1 && grid[i + 1][j] == 1) // 下
        helper(i + 1, j, grid)
    if (j > 0 && grid[i][j - 1] == 1) // 左
        helper(i, j - 1, grid)
    if (i < grid[0].length + 1 && grid[i][j + 1] == 1) // 右
        helper(i, j + 1, grid)
}

numIslands([["1", "0", "1", "1", "1"], ["1", "0", "1", "0", "1"], ["1", "1", "1", "0", "1"]])