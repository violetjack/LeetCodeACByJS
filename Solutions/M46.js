/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    const src = `${num}`;
    let p = 0,
        q = 0,
        r = 1;
    for (let i = 0; i < src.length; ++i) {
        p = q;
        q = r;
        r = 0;
        r += q;
        if (i == 0) {
            continue;
        }
        const pre = Number(src.substring(i - 1, i + 1));
        if (pre <= 25 && pre >= 10) {
            r += p;
        }
    }
    return r;
};

console.log(translateNum(12258));



var translateNum = function(num) {
    const numStr = num.toString()
    const dfs = (str, pointer) => {
        if (pointer >= str.length - 1) return 1
        const temp = Number(str[pointer] + str[pointer + 1])
        if (temp >= 10 && temp <= 25) {
            return dfs(str, pointer + 1) + dfs(str, pointer + 2)
        }
        return dfs(str, pointer + 1)
    }
    return dfs(numStr, 0)
};
