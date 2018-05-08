/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    if (board == null || board.length == 0) return
    let m = board.length, n = board[0].length
    // 计算当前和下一个状态（二进制）
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 获取周围存活细胞数量
            let lives = liveNeighbors(board, m, n, i, j)

            // 在开始阶段，每个下一阶段的二进制都为 0;
            // 所以我们只要关心什么时候下一阶段的二进制值会变为 1。
            if (board[i][j] == 1 && lives >= 2 && lives <= 3) {
                board[i][j] = 3 // 01 -> 11
            }
            if (board[i][j] = 0 && lives == 3) {
                board[i][j] = 2 // 00 -> 10
            }
        }
    }
    // 变为第二状态
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] >>= 1
        }
    }
};

function liveNeighbors(board, m, n, i, j) {
    let lives = 0
    for (let x = Math.max(i - 1, 0); x <= Math.min(i + 1, m - 1); x++) {
        for (let y = Math.max(j - 1, 0); y <= Math.min(j + 1, n - 1); y++) {
            lives += board[x][y] & 1
        }
    }
    lives -= board[i][j] & 1
    return lives
}