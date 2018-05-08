/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if (nums.length == 0) return []
    const ans = []

    let firstArr = nums.slice(0, k)
    let max = Math.max(...firstArr)
    ans.push(max)
    for (let i = k; i < nums.length; i++){
        if (nums[i] > max){
            max = nums[i]
        } else if (nums[i - k] == max) {
            let arr = nums.slice(i - k + 1, i + 1)
            max = Math.max(...arr)
        }
        ans.push(max)
    }
    return ans
};

maxSlidingWindow([1,3,1,2,0,5], 3)