/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (nums.length == 0) return null
    return helper(nums, 0, nums.length - 1)
};

function helper(nums, lo, hi) {
    if (lo > hi) {
        return null
    }
    let mid = parseInt((lo + hi + 1) / 2)
    let node = new TreeNode(nums[mid])

    node.left = helper(nums, lo, mid - 1)
    node.right = helper(nums, mid + 1, hi)
    return node
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(sortedArrayToBST([-10,-3,0,5,9]))