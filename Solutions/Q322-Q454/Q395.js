/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    let count = new Array(26)
    count.fill(0)
    for (let i = 0; i < s.length; i++) {
        let idx = s.charCodeAt(i) - "a".charCodeAt()
        count[idx]++
    }

    let exp = "["
    for (let i = 0; i < 26; i++) {
        if (count[i] < k && count[i] > 0) {
            exp += String.fromCharCode(i + "a".charCodeAt())
        }
    }
    exp += "]"
    let arr = s.split(new RegExp(exp, "g"))
    
    console.log(arr)
    let max = 0
    for (let item of arr){
        max = Math.max(max, item.length)
    }
    return max
};

function helper(s, start, end, k) {
    if (end - start < k) return 0
    let count = new Array(26)
    count.fill(0)
    for (let i = start; i < end; i++) {
        let idx = s.charCodeAt(i) - "a".charCodeAt()
        count[idx]++
    }
    for (let i = 0; i < 26; i++) {
        if (count[i] < k && count[i] > 0) {
            for (let j = start; j < end; j++) {
                let left = helper(s, start, j, k)
                let right = helper(s, j + 1, end, k)
                return Math.max(left, right)
            }
        }
    }
    return end - start
}

longestSubstring("aaabb", 3)
longestSubstring("ababbc", 2)