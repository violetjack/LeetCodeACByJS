/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    // 二分法
    let lo = matrix[0][0],
        hi = matrix[matrix.length - 1][matrix[0].length - 1] + 1;//[lo, hi)
    while (lo < hi) {
        // 中间值
        let mid = lo + parseInt((hi - lo) / 2);
        let count = 0, j = matrix[0].length - 1; // j 是矩阵最右侧的 index
        for (let i = 0; i < matrix.length; i++) {
            while (j >= 0 && matrix[i][j] > mid) j--; // 算出中间值是第 j 小的值（是否为k）
            count += (j + 1);
        }
        if (count < k) lo = mid + 1;
        else hi = mid;
    }
    // 返回最终的值
    return lo;
};


var kthSmallest = function (matrix, k) {
    let lo = matrix[0][0],
        hi = matrix[matrix.length - 1][matrix[0].length - 1] + 1

    while (lo < hi) {
        let mid = lo + parseInt((hi - lo) / 2)
        let count = 0,
            j = matrix[0].length - 1
        for (let i = 0; i < matrix.length; i++) {
            while (j >= 0 && matrix[i][j] > mid)
                j--
            count += (j + 1)
        }
        if (count < k) lo = mid + 1
        else hi = mid
    }
    return lo
}