/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const arr = new Array(26)
    arr.fill(0)
    for (let c of s){
        arr[c.charCodeAt() - "a".charCodeAt()]++
    }
    for (let c of t){
        arr[c.charCodeAt() - "a".charCodeAt()]--
    }
    for (let item of arr){
        if (item != 0) return false
    }
    return true
};