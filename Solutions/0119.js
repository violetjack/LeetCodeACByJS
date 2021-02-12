/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let row = [1]
    let index = 0

    while (index < rowIndex) {
        row = getNextRow(row)
        index++
    }

    return row
}

var getNextRow = function (nums) {
  let side = nums[0]
  const result = []
  result.push(side)
  for (let i = 0; i < nums.length - 1; i++) {
    result.push(nums[i] + nums[i + 1])
  }
  result.push(side)
  return result
}

console.log(getRow(1))
console.log(getRow(2))
console.log(getRow(3))
console.log(getRow(4))