/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    MinCount = Number.MAX_VALUE
    dfs(beginWord, endWord, wordList, 1)
    return MinCount == Number.MAX_VALUE ? 0 : MinCount
};

let MinCount = Number.MAX_VALUE

function dfs(beginWord, endWord, wordList, count) {
    if (beginWord == endWord) {
        MinCount = Math.min(MinCount, count)
    }
    let max = Number.MAX_VALUE
    for (let i = 0; i < wordList.length; i++) {
        if (changeOneChar(beginWord, wordList[i])) {
            let clone = wordList.slice()
            clone.splice(i, 1)
            dfs(wordList[i], endWord, clone, count + 1)
        }
    }
}

function changeOneChar(a, b) {
    let count = 0
    for (let i = 0; i < a.length; i++)
        if (a[i] != b[i])
            count++
    return count == 1
}

console.log(ladderLength("hit",
    "cog",
    ["hot", "cog", "dot", "dog", "hit", "lot", "log"]))