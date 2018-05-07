let ans = []

var inorderTraversal = function (root) {
    ans = []
    helper(root)
    return ans
};

function helper(node) {
    if (node == null) return
    if (node.left) helper(node.left)
    ans.push(node.val)
    if (node.right) helper(node.right)
}

