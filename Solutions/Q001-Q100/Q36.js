/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const M = board.length, N = board[0].length
    for (let i = 0; i < M; i++) {
        let row = new Set()
        let col = new Set()
        let rect = new Set()
        for (let j = 0; j < N; j++) {
            if (board[i][j] != "." && row.has(board[i][j])) {
                return false
            } else {
                row.add(board[i][j])
            }

            if (board[j][i] != "." && col.has(board[j][i])) {
                return false
            } else {
                col.add(board[j][i])
            }

            let RowIndex = (3 * parseInt(i / 3)) + parseInt(j / 3)
            let ColIndex = 3 * (i % 3) + j % 3
            console.log(RowIndex + "-" + ColIndex)
            const item = board[RowIndex][ColIndex]
            if (item != "." && rect.has(item)) {
                return false
            } else {
                rect.add(item)
            }
        }
    }
    return true
};

let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

isValidSudoku(board)