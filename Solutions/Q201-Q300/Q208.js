/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root
    word.split("").forEach(char => {
        if (!node[char])
            node[char] = {}
        node = node[char]
    })
    node.isEnd = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.root
    for (let i =0; i < word.length; i++){
        const char = word[i]

        if (node[char]) {
            node = node[char]
        } else {
            return false
        }
    }
    return !!node.isEnd
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.root
    for (let i =0; i < prefix.length; i++){
        const char = prefix[i]

        if (node[char]) {
            node = node[char]
        } else {
            return false
        }
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie()
trie.search("a")