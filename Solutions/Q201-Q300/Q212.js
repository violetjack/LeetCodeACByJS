let hasWord = false

var findWords = function (board, words) {
    var ans = []
    for (let word of words) {
        for (let j = 0; j < board.length; j++) {
            for (let i = 0; i < board[0].length; i++) {
                if (board[j][i] == word[0]) {
                    hasWord = false
                    DFS(word, board, 0, j, i, "")
                    if (hasWord) {
                        if (!ans.includes(word))
                            ans.push(word)
                    }
                }
            }
        }
    }
    return ans
};

function DFS(word, board, index, j, i, subStr) {
    if (word[index] == board[j][i]) {
        subStr += board[j][i]
        board[j][i] = "*"
        if (j < board.length - 1)
            DFS(word, board, index + 1, j + 1, i, subStr)
        if (j > 0)
            DFS(word, board, index + 1, j - 1, i, subStr)
        if (i < board[0].length - 1)
            DFS(word, board, index + 1, j, i + 1, subStr)
        if (i > 0)
            DFS(word, board, index + 1, j, i - 1, subStr)
        board[j][i] = word[index]
    }
    if (index >= word.length || subStr == word) {
        hasWord = true
    }
}

findWords([["a"]], ["a"])