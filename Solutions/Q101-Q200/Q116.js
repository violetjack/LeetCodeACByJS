/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (root == null || root.left == null) return
    connectNodes(root.left, root.right)
};

function connectNodes(node1, node2){
    node1.next = node2
    if (node1.left != null){
        connectNodes(node1.left, node1.right)
        connectNodes(node1.right, node2.left)
        connectNodes(node2.left, node2.right)
    }
}