/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const leftCount = getNodeLength(root.left)
    if (k < leftCount + 1) {
        return kthSmallest(root.left, k)
    } else if (k > leftCount + 1) {
        return kthSmallest(root.right, k - leftCount - 1)
    }
    return root.val
};

function getNodeLength(node) {
    if (node == null) return 0
    return 1 + getNodeLength(node.left) + getNodeLength(node.right)
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const node = new TreeNode(1)
node.right = new TreeNode(2)

kthSmallest(node, 2)