/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let list = []
    nums.sort()
    backtrack(list, new Array(), nums, 0);
    return list
};

function backtrack(list, tempList, nums, start) {
    list.push(tempList.slice());
    for (let i = start; i < nums.length; i++) {
        tempList.push(nums[i]);
        backtrack(list, tempList, nums, i + 1);
        tempList.pop()
    }
}

subsets([1, 2, 3])

/**
 * 
 * 1
 * 1 2
 * 1 2 3
 * 1 3
 * 2
 * 2 3
 * 3
 */