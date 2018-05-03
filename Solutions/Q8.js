/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    let i = 0
    // 去除空格
    while (str[i] == " ") i++
    // 处理正负值
    let sign = 1
    if (str[i] == "-" || str[i] == "+") {
        if (str[i] == "-") sign = -1
        i++
    }
    // 处理数字
    let num = 0
    while (i < str.length) {
        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            num = num * 10 + parseInt(str[i])
            i++
        } else {
            break
        }
    }
    num *= sign
    // 处理 32 位最大最小值
    let max = 2
    for (let n = 0; n < 30; n++)
        max *= 2
    if (num >= max)
        return max - 1
    if (num <= -max)
        return -max + 1
    return num
};

console.log(myAtoi("2147483648"))