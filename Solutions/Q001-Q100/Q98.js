
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

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {    
    return validate(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

const validate = (node, min, max) => {
    if (!node) {
        return true;
    }
    
    if (node.val < min || node.val > max) {
        return false;
    }
    
    return (validate(node.left, min, node.val - 1) && validate(node.right, node.val + 1, max));
}