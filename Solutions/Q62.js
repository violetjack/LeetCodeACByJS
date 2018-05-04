/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const pos = new Array(m)
    for (let i = 0; i < m; i++) {
        pos[i] = new Array(n)
    }
    for (let i = 0; i < n; i++) {
        pos[0][i] = 1
    }
    for (let i = 0; i < m; i++) {
        pos[i][0] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            pos[i][j] = pos[i - 1][j] + pos[i][j - 1]
        }
    }
    return pos[m - 1][n - 1]
};

uniquePaths(3, 7)

/**
0  1  1  1  1  1  1 
1  2  3  4  5  6  7 
1  3  6  10 15 21 28
 */