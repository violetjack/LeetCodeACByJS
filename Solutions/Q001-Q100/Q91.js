/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let n = s.length
    if (n == 0) return 0
    let memo = new Array(n + 1)
    memo[n] = 1
    memo[n - 1] = s[n - 1] != '0' ? 1 : 0;

    for (let i = n - 2; i >= 0; i--) {
        if (s[i] == "0") {
            memo[i] = 0
        } else {
            memo[i] = parseInt(s.slice(i, i + 2)) <= 26 ? memo[i + 1] + memo[i + 2] : memo[i + 1]
        }
    }
    return memo[0]
};

console.log(numDecodings("12"))

// public class Solution {
//     public int numDecodings(String s) {
//         int n = s.length();
//         if (n == 0) return 0;
//         // 使用 memo 数组记录某个数字可以转码的总数
//         int[] memo = new int[n + 1];
//         memo[n] = 1;
//         memo[n - 1] = s.charAt(n - 1) != '0' ? 1 : 0; // 最后一个值为0，总数为0

//         for (int i = n - 2; i >= 0; i--)
//         if (s.charAt(i) == '0') continue; // 当前字符为0
//         // 当前总数为：如果两位数小于等于26，前一个字符的总数加上前两个字符的总数。否则返回前一个字符的总数
//         else memo[i] = (Integer.parseInt(s.substring(i, i + 2)) <= 26) ? memo[i + 1] + memo[i + 2] : memo[i + 1];
//         // 返回最终概率
//         return memo[0];
//     }
// }