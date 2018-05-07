let maxValue

var maxPathSum = function (root) {
    maxValue = Number.MIN_SAFE_INTEGER
    find(root)
    return maxValue
};

function find(node) {
    if (node == null) return 0
    let left = Math.max(0, find(node.left));// 获取左侧最大和
    let right = Math.max(0, find(node.right)); // 获取右侧最大和
    maxValue = Math.max(maxValue, left + right + node.val); // 获得最大值
    return Math.max(left, right) + node.val; // 返回最大值
}