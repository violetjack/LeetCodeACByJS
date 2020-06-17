/**
 * 思考暴力解法，目测性能上过不去！
 *
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
    let ans = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < A.length - 1; i++) {
        for (let j = i + 1; j < A.length; j++) {
            ans = Math.max(ans, A[i] + A[j] + i - j);
        }
    }
    return ans;
};

/**
 * 官方的题解……
 * 
 * @param {number[]} A 
 */
var maxScoreSightseeingPair = function (A) {
    let ans = 0;
    let mx = A[0] + 0;
    for (let j = 1; j < A.length; ++j) {
        ans = Math.max(ans, mx + A[j] - j);
        // 边遍历边维护
        mx = Math.max(mx, A[j] + j);
    }
    return ans;
};
