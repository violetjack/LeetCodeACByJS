/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums = nums.map(item => {
        return item + ""
    })

    nums.sort((a, b) => {
        const sort1 = a + b
        const sort2 = b + a
        return parseInt(sort2) - parseInt(sort1)
    })

    if (nums[0] == "0") return "0"
    return nums.join("")
};

console.log(largestNumber([5, 10, 7]))