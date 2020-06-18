/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
const recoverFromPreorder = (S) => {
  const stack = []
  for (let i = 0; i < S.length;) {
    let curLevel = 0 //一个curNode对应一个curLevel
    while (i < S.length && S[i] == '-') { // 避免循环半途中出界
      i++
      curLevel++    // 连字符个数代表level
    }
    const start = i // 记录当前节点值的开始位置
    while (i < S.length && S[i] != '-') {
      i++           // 指针移到当前节点值的结束位置
    }
    const curNode = new TreeNode(S.slice(start, i)) //创建当前节点
    if (stack.length == 0) { // ROOT入栈，不用找父亲，continue
      stack.push(curNode)
      continue
    }
    while (stack.length > curLevel) { // 栈顶不是父亲，栈顶出栈
      stack.pop()                     // 直到栈顶是父亲了
    }
    if (stack[stack.length - 1].left) {       // 左儿子已存在
      stack[stack.length - 1].right = curNode // 安排为右儿子 
    } else {
      stack[stack.length - 1].left = curNode  // 安排为左儿子
    }
    stack.push(curNode) // 节点肯定要入栈一次
  }
  return stack[0]       // 栈底就是根节点
};