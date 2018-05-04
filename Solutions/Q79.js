/**
* @param {character[][]} board
* @param {string} word
* @return {boolean}
*/
var exist = function (board, word) {
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[0].length; x++) {
            if (find(board, word, y, x, 0)) return true
        }
    }
    return false
};

function find(board, word, y, x, d) {
    if (d == word.length) return true
    if (y < 0 || x < 0 || y == board.length || x == board[y].length) return false;
    if (board[y][x] != word[d]) return false
    let tmp = board[y][x]
    board[y][x] = "*"
    let exist = find(board, word, y, x + 1, d + 1)
        || find(board, word, y, x - 1, d + 1)
        || find(board, word, y + 1, x, d + 1)
        || find(board, word, y - 1, x, d + 1)
    board[y][x] = tmp
    return exist
}

exist([["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]], "AAB")

//     // board 二维数组，word 查找的单词
//     public boolean exist(char[][] board, String word) {
//     char[] w = word.toCharArray();// 转为字符数组
//     for (int y = 0; y < board.length; y++) {
//         for (int x = 0; x < board[y].length; x++) {
//             // 遍历二维数组去求是否存在
//             if (exist(board, y, x, w, 0)) return true;
//         }
//     }
//     return false;
// }

//     // board 二位数组，第 x 列 第 y 行，查找的单词字符数组，i 是单词字符数组索引值
//     private boolean exist(char[][] board, int y, int x, char[] word, int i) {
//     if (i == word.length) return true; // 完全匹配，返回 true
//     if (y < 0 || x < 0 || y == board.length || x == board[y].length) return false; // x、y超出矩阵边界，返回 false
//     if (board[y][x] != word[i]) return false; // 字符不匹配，返回 false
//     board[y][x] ^= 256; // 按位异或，先将当前字符转为另外的字符，避免获取重复数值
//     boolean exist = exist(board, y, x + 1, word, i + 1)
//         || exist(board, y, x - 1, word, i + 1)
//         || exist(board, y + 1, x, word, i + 1)
//         || exist(board, y - 1, x, word, i + 1);
//     board[y][x] ^= 256; // 恢复当前值
//     return exist;
// }