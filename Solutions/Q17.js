// var letterCombinations = function (digits) {
//     var map = {
//         "2": ["a", "b", "c"],
//         "3": ["d", "e", "f"],
//         "4": ["g", "h", "i"],
//         "5": ["j", "k", "l"],
//         "6": ["m", "n", "o"],
//         "7": ["p", "q", "r", "s"],
//         "8": ["t", "u", "v"],
//         "9": ["w", "x", "y", "z"]
//     };
//     // 第一个字符
//     var rtn = map[digits[0]];
//     digits = digits.substr(1);
//     // 遍历字符
//     digits.split("").forEach(function (digit) {
//         var t = [];
//         // 遍历相对符号
//         map[digit].forEach(function (letter) {
//             t = t.concat(rtn.map(function (item) {
//                 // 合并
//                 return item + letter;
//             }));
//         });
//         rtn = t;
//     });
//     return rtn === undefined ? [] : rtn;
// };

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    var map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };
    var ans = map[digits[0]]
    digits = digits.substring(1)
    digits.split("").forEach(function (digit) {
        var arr = []
        map[digit].forEach(function (letter) {
            arr = arr.concat(ans.map(function (item) {
                return item + letter
            }))
        })
        ans = arr
    })
    return ans ? [] : ans
};

console.log(letterCombinations("23"))