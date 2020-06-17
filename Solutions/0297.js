/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) 
        return "[]";
    var queue = [];
    var ans = [];
    queue.push(root);
    while(queue.length !== 0) {
        var node = queue.shift();
        if(node === null) {
            ans.push(null);
            continue;
        }
        ans.push(node.val);
        if(node.left)
            queue.push(node.left);
        else 
            queue.push(null);
        if(node.right)
            queue.push(node.right);
        else 
            queue.push(null);
        
    }
    ans = sanitize(ans);
    var ansStr = "";
    ansStr += "[";
    for(var i=0; i<ans.length; i++){
        if(ans[i] === null)
            ansStr += "null" + ",";
        else
            ansStr += ans[i] + ",";
    }
    ansStr = ansStr.slice(0,-1);
    ansStr += "]";
    return ansStr;
};

function sanitize(ans) {
    var lastcharIndex = -1;
    for(var i=0; i<ans.length; i++) {
        if(ans[i] !== null) {
            lastcharIndex = i;
        }
    }
    var newArray = [];
    for(var j=0; j<=lastcharIndex; j++) {
        newArray.push(ans[j]);
    }
    return newArray;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data.length === 0)
        return null;
    var values = data.substring(1, data.length-1).split(',');
    if(!values[0]) {
        return null;
    }
    var val = values.shift();
    var root = new TreeNode(parseInt(val));
    var queue = [];
    queue.push(root);
    while(queue.length !== 0) {
        let node = queue.shift();
        let val = values.shift();
        node.left = !isNaN(parseInt(val)) ? new TreeNode(parseInt(val)) : null;
        val = values.shift();
        node.right = !isNaN(parseInt(val)) ? new TreeNode(parseInt(val)) : null;
        if(node.left)
            queue.push(node.left);
        if(node.right)
            queue.push(node.right);
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 /**
  * 二叉树的序列化和反序列化
  * 通过BFS来实现
  */