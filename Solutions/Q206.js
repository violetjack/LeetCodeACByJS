/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let ans = null,cur = head
    while (cur != null) {
        let nextTmp = cur.next
        cur.next = ans
        ans = cur
        cur = nextTmp
    }
    return ans
};