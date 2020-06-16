/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = (T) => {
    const res = new Array(T.length).fill(0)
    const stack = []
    for (let i = T.length - 1; i >= 0; i--) {
        while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
            stack.pop()
        }
        if (stack.length && T[i] < T[stack[stack.length - 1]]) {
            res[i] = stack[stack.length - 1] - i
        }
        stack.push(i)
    }
    return res
}

/**
  * 作者：hyj8
  * 链接：https://leetcode-cn.com/problems/daily-temperatures/solution/shou-hui-ti-jie-fang-da-guan-cha-dan-diao-zhan-si-/
  * 来源：力扣（LeetCode）
  * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */