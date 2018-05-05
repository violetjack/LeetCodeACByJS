/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    return helper(0, 0, inorder.length - 1, preorder, inorder)
};

function helper(preStart, inStart, inEnd, preorder, inorder) {
    if (preStart > preorder.length - 1 || inStart > inEnd) {
        return null
    }
    let root = new TreeNode(preorder[preStart])
    let inIndex = 0
    for (let i = inStart; i <= inEnd; i++) {
        if (inorder[i] == root.val) {
            inIndex = i
        }
    }
    root.left = helper(preStart + 1, inStart, inIndex - 1, preorder, inorder)
    root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preorder, inorder)
    return root
}