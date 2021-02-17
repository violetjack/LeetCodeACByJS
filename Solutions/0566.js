/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  if (nums.length === 0 || nums.length * nums[0].length !== r * c) return nums
  const flatNums = nums.flat()
  const result = []
  for (let i = 0; i < r; i++) {
    const row = []
    for (let j = 0; j < c; j++) {
      row.push(flatNums[i * c + j])
    }
    result.push(row)
  }
  return result
}

console.log(
  matrixReshape(
    [
      [1, 2, 3],
      [4, 5, 6]
    ],
    3,
    2
  )
)

/**
 * 可以不用 flat
 */
var matrixReshape = function(nums, r, c) {
    const m = nums.length;
    const n = nums[0].length;
    if (m * n != r * c) {
        return nums;
    }

    const ans = new Array(r).fill(0).map(() => new Array(c).fill(0));
    for (let x = 0; x < m * n; ++x) {
        ans[Math.floor(x / c)][x % c] = nums[Math.floor(x / n)][x % n];
    }
    return ans;
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/reshape-the-matrix/solution/zhong-su-ju-zhen-by-leetcode-solution-gt0g/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。