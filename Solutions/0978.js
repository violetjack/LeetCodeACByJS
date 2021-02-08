/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    const n = arr.length;
    let ret = 1;
    let left = 0, right = 0;

    while (right < n - 1) {
        if (left == right) {
            if (arr[left] == arr[left + 1]) {
                left++;
            }
            right++;
        } else {
            if (arr[right - 1] < arr[right] && arr[right] > arr[right + 1]) {
                right++;
            } else if (arr[right - 1] > arr[right] && arr[right] < arr[right + 1]) {
                right++;
            } else {
                left = right;
            }
        }
        ret = Math.max(ret, right - left + 1);
    }
    return ret;
};

/**
 * 首先，必须理解题目意思。
 * 通过 left 和 right 的方式的确可行，但是在判断逻辑上出了问题。
 * 题目上说的是同时满足两种条件，而我却纠结于下一个符号是大于还是小于。
 * 整体思路没问题，审题要仔细
 * 
 * ! 连续最长子数组问题可以用双指针和动态规划求解。
 */

console.log(maxTurbulenceSize([0, 1, 1, 0, 1, 0, 1, 1, 0, 0]))
