/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const dp1 = new Array(nums.length)
  dp1[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp1[i] = dp1[i - 1] * nums[i]
  }
  const dp2 = new Array(nums.length)
  dp2[nums.length - 1] = nums[nums.length - 1]
  for (let i = nums.length - 2; i >= 0; i--) {
    dp2[i] = dp2[i + 1] * nums[i]
  }
  const ans = new Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      ans[i] = dp2[i + 1]
    } else if (i === nums.length - 1) {
      ans[i] = dp1[i - 1]
    } else {
      ans[i] = dp1[i - 1] * dp2[i + 1]
    }
  }
  return ans
};

productExceptSelf([1, 2, 3, 4])

/**
 * PS：以上写法用了两次动态规划算出最终的结果。
 * 稍微调整后，可以得到以下优化解法！
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const len = nums.length
  const ans = new Array(len)

  ans[0] = 1
  for (let i = 1; i < len; i++) {
    ans[i] = ans[i - 1] * nums[i - 1]
  }
  let R = 1
  for (let i = len - 1; i >= 0; i--) {
    ans[i] = ans[i] * R
    R = R * nums[i]
  }
  console.log(ans)
  return ans
};

productExceptSelf([1, 2, 3, 4])
