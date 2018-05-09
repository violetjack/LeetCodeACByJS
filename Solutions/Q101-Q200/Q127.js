/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0
    let set = new Set(),
        visited = new Set(),
        len = 1

    set.add(beginWord)
    visited.add(beginWord)
    while (set.size != 0) {
        let tmp = new Set([...set])

        for (let w of tmp) {
            visited.add(w)
            set.delete(w)

            if (changeOneChar(w, endWord))
                return len + 1
            
            for (let word of wordList){
                if (changeOneChar(w, word) && !visited.has(word)){
                    set.add(word)
                }
            }
        }
        len++
    }
    return 0
};

function changeOneChar(a, b) {
    let count = 0
    for (let i = 0; i < a.length; i++)
        if (a[i] != b[i])
            count++
    return count == 1
}

let beginWord = "hit",
    endWord = "cog",
    wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

ladderLength(beginWord, endWord, wordList)