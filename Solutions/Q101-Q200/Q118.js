/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows == 0) return []
    if (numRows == 1) return [[1]]
    if (numRows == 2) return [[1], [1, 1]]
    let ans = [[1], [1, 1]]
    for (let len = 2; len < numRows; len++) {
        let row = [1]
        for (let i = 1; i < ans[len - 1].length; i++) {
            row.push(ans[len - 1][i - 1] + ans[len - 1][i])
        }
        row.push(1)
        ans.push(row)
    }
    return ans
};

console.log(generate(5))