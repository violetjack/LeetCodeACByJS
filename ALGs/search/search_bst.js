/**
 * 二叉树的查找
 * 使用递归的方式进行查找
 */
function Node(val){
    this.val = val
    this.left = null
    this.rignt = null
}

function get(node, val){
    if (node == null) return null
    if (val < node.val) return get(x.left, val)
    if (val > node.val) return get(x.rignt, val)
    else return x.val
}

function put(node, val){
    if (node == null) node = new Node(val)
    if (val < node.val) return put(x.left, val)
    if (val > node.val) return put(x.rignt, val)
    else node.val = val
    return node
}