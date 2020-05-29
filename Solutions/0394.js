/**
 * 通过堆栈思路来截取字符串
 * 通过递归思路解析内部字符串
 * 
 * PS：官方题解是堆栈和递归，我两个都用上了，性能却很差 T-T
 * 
 * 实现了，但是效果很差
 * 
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let ans = '';
    const stack = [];
    let num = 0;
    let index = 0;
    while (index < s.length) {
        const char = s[index];
        if (/\d/.test(char)) {
            if (stack.length === 0) {
                num = num * 10 + Number(char);
            }
        } else if (char === '[') {
            stack.push(index);
        } else if (char === ']') {
            const startIndex = stack.pop();
            if (stack.length === 0) {
                const sub = s.substring(startIndex + 1, index);
                ans += decodeString(sub.repeat(num))
                num = 0;
            }
        } else {
            if (stack.length === 0) {
                ans += char;
            }
        }
        index++;
    }
    return ans;
};

console.log(decodeString('3[a]2[bc]')); // 3 a
console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
