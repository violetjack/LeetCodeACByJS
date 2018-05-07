/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let ans = "1"
    let i = 1
    while(i < n) {
        ans = say(ans)
        i++
    }
    return ans
};

function say(s){
    let curChar = s[0]
    let curCount = 1
    let ans = ""
    for (let i = 1; i < s.length; i++){
        if (s[i] == curChar){
            curCount++
        } else {
            ans += curCount + curChar
            curChar = s[i]
            curCount = 1
        }
    }
    ans += curCount + curChar
    return ans
}

console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
console.log(countAndSay(4))