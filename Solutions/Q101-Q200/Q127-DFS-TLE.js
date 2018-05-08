/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    return dfs(beginWord, endWord, wordList)
};

function dfs(beginWord, endWord, wordList) {
    if (changeOneChar(beginWord, endWord)) return 2
    let max = Number.MAX_VALUE
    for (let i = 0; i < wordList.length; i++) {
        if (changeOneChar(beginWord, wordList[i])) {
            let clone = wordList.slice()
            clone.splice(i, 1)
            let cur = dfs(wordList[i], endWord, clone) + 1
            max = Math.min(max, cur)
        }
    }
    return max == Number.MAX_VALUE ? 0 : max
}

function changeOneChar(a, b) {
    let count = 0
    for (let i = 0; i < a.length; i++)
        if (a[i] != b[i])
            count++
    return count == 1
}

ladderLength("hit",
"cog",
["hot","cog","dot","dog","hit","lot","log"])