/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    result = []
    nums.sort(function (a, b) {
        return a - b
    })
    find(nums, [])
    return result
};

let result = []

function find(nums, templateList) {
    if (nums.length == 0) {
        result.push(templateList.slice())
    }
    for (let i = 0; i < nums.length; i++) {
        templateList.push(nums[i])
        let copy = nums.slice()
        copy.splice(i, 1)
        find(copy, templateList)
        templateList.pop()
    }
}

permute([1, 2, 3])