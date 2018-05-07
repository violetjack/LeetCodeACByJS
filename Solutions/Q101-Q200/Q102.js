/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = []
    helper(root, ans, 0)
    return ans
};

function helper(node, ans, i){
    if (node == null) return
    if (i == ans.length) ans.push([])
    ans[i].push(node.val)

    helper(node.left, ans, i + 1)
    helper(node.right, ans, i + 1)
}