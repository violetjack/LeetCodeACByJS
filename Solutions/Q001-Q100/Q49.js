/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const a = "a".charCodeAt()
    let map = new Map()
    for (let i = 0; i < strs.length; i++) {
        let charArr = createArr()
        for (let j = 0; j < strs[i].length; j++) charArr[strs[i].charCodeAt(j) - a]++
        let key = charArr.join("")
        if (map.has(key)) {
            map.get(key).push(strs[i])
        } else {
            map.set(key, [strs[i]])
        }
    }
    const ans = []
    for (let value of map.values()) {
        ans.push(value)
    }
    return ans
};

function createArr() {
    let i = 0
    let arr = []
    while (i < 26) {
        arr.push(0)
        i++
    }
    return arr
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])