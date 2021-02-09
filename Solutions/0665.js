/**
 * @param {number[]} nums 
 */
var checkPossibility = function(nums) {
  const n = nums.length;
  for (let i = 0; i < n - 1; ++i) {
      const x = nums[i], y = nums[i + 1];
      if (x > y) {
          nums[i] = y;
          if (isSorted(nums)) {
              return true;
          }
          nums[i] = x; // 复原
          nums[i + 1] = x;
          return isSorted(nums);
      }
  }
  return true;
};

const isSorted = (nums) => {
  const n = nums.length;
  for (let i = 1; i < n; ++i) {
      if (nums[i - 1] > nums[i]) {
          return false;
      }
  }
  return true;
}

/**
 * 这种解法就是按照题目进行修改。
 * 我的想法是将元素移除，官方的想法是将当前值变为前一个值。
 * ! 并且更改完之后需要做一次排序检测
 * 这一点我没想明白，以为只要移除一个元素后继续向下排序就好。
 */