/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0
  let len = 0

  for (let num of nums) {
    if (num === 1) {
      len++
      max = Math.max(len, max)
    } else {
      len = 0
    }
  }
  return max
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1]))
