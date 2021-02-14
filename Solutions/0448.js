/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length
    for (let num of nums) {
        const index = (num - 1) % n
        nums[index] += n
    }
    console.log(nums)
    const result = []
    for (let [i, num] of nums.entries()) {
        if (num <= n) {
            result.push(i + 1)
        }
    }
    console.log(result)
    return result
};

findDisappearedNumbers([4,3,2,7,8,2,3,1])

/**
 * 做这种题，会发现数组的值和索引是可以反转的。
 * 避免难以理解，但是却是可以在不占用多余空间的情况下解决问题。
 */