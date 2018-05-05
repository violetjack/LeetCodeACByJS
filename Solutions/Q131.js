let ans = []
let curList = []

var partition = function (s) {
    ans = []
    curList = []
    backTrack(s, 0)
    return ans
};

function backTrack(s, l) {
    if (curList.length > 0 && l >= s.length) {
        let r = curList.slice()
        ans.push(r)
    }
    for (let i = l; i < s.length; i++) {
        if (isPalindrome(s, l, i)) {
            if (l == i) curList.push(s[i])
            else curList.push(s.slice(l, i + 1))
            backTrack(s, i + 1)
            curList.pop()
        }
    }
}

function isPalindrome(s, l, r) {
    if (l == r) return true
    while (l < r) {
        if (s[l] != s[r]) return false
        l++
        r--
    }
    return true
}