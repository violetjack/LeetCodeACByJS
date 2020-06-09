/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length == 0) return 0
    let ans = 0
    const set = new Set(nums)
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (!set.has(num - 1)) {
            let len = 1
            let nextNum = num + 1
            while (set.has(nextNum)) {
                len++
                nextNum++
            }
            ans = Math.max(ans, len)
        }
    }
    return ans
};


console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))