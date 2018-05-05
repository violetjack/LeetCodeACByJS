
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isValid = true

var isValidBST = function (root) {
    if (root == null) return true
    helper(root)
    return isValid
};

function helper(node) {
    if (node == null) return
    if (node.left != null) {
        if (node.left.val > node.val) {
            isValid = false
            return
        }
        helper(node.left)
    }
    if (node.right != null) {
        if (node.right.val < node.val) {
            isValid = false
            return
        }
        helper(node.right)
    }
}

const tree = new TreeNode(0)
console.log(isValidBST(tree))