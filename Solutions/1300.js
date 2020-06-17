/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
  let len = arr.length
  let min = Math.min(...arr, ~~(target / len))
  let max = Math.max(...arr)
  let last = 0
  while(min < max){   // 因为(数组中所有大于 value 的值变成 value) 所以最大值只能为arr中的最大值
    let sum = arr.reduce((a,b) => {  // 求和  先把arr中大于min的 变成 min
      return a + Math.min(b, min)
    }, 0)
    if (sum < target) {
      min = min < max ? min + 1 : max
      last = sum
    } else {
      if(target - last <= sum - target){ // 当上一次 和 target差  小于 当前 和 target差  取小的那个
        --min
      }
      return min
    }
  } 
  return min
};