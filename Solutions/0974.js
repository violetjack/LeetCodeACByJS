/**
 * 动态规划
 * ! 挂了，复杂度太高
 *
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  const arr = new Array()
  for (let i = 0; i < A.length; i++) {
    arr.push(new Array(A.length).fill(0))
  }
  let ans = 0
  for (let i = 0; i < A.length; i++) {
      for (let j = i; j < A.length; j++) {
        arr[i][j] = (arr[i][j - 1] || 0) + A[j]
        console.log(arr[i][j])
        if (arr[i][j] % K === 0) {
          ans++
        }
      }
  }
  return ans
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));

//    4  5  0 -2 -3  1
// 4  4  9  9  7  4  5
// 5     5  5  3  0  1
// 0        0 -2 -5 -4
// -2         -2 -5 -4
// -3            -3 -2
// 1                 1

/**
 * 这种数学套路我选择死亡……
 *
 * 作者：hyj8
 * 链接：https://leetcode-cn.com/problems/subarray-sums-divisible-by-k/solution/you-jian-qian-zhui-he-na-jiu-zai-ci-dai-ni-da-tong/
 * 来源：力扣（LeetCode）
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
var subarraysDivByK = (A, K) => {
    let map = new Array(K).fill(0); // 初始化map数组，长度K
    map[0] = 1; // 预置边界情况，第0项1。其他项0
    let preSumModK = 0;
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        preSumModK = (preSumModK + A[i]) % K;
        if (preSumModK < 0) preSumModK += K; // 因为 K=5 余数为 1 2 3 4，那么 -1 + 5 = 4，就是把余数都统计到 1 2 3 4 里面！
        count += map[preSumModK]; // 索引是mod，值是出现次数
        map[preSumModK]++; // 出现次数+1
    }
    console.log(map);
    return count;
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
