/**
 * 深度优先搜索（DFS）
 */
let mark = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
]

function dfs(rect, i, j, count) {
    mark[i][j] = true
    count++    
    if (i == rect.length - 1 && j == rect[0].length - 1) {
        console.log(count)
    }
    if (i > 0 
        && !mark[i - 1][j] 
        && rect[i - 1][j] > rect[i][j])
        dfs(rect, i - 1, j, count)
    if (i < rect.length - 1 
        && !mark[i + 1][j] 
        && rect[i + 1][j] > rect[i][j])
        dfs(rect, i + 1, j, count)
    if (j > 0 
        && !mark[i][j - 1] 
        && rect[i][j - 1] > rect[i][j])
        dfs(rect, i, j - 1, count)
    if (j < rect[0].length - 1 
        && !mark[i][j + 1] 
        && rect[i][j + 1] > rect[i][j])
        dfs(rect, i, j + 1, count)
    mark[i][j] = false
}

const rect = [
    [1, 2, 2, 5],
    [3, 3, 6, 8],
    [1, 4, 5, 6],
    [9, 3, 6, 7]
]

dfs(rect, 0, 0, 0)

/**
 * 实现了简单的深度优先搜索
 */