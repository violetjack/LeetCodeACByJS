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
var oddEvenList = function (head) {
    if (head == null)
        return null;
    // 定义奇数链表、偶数链表、偶数链表开头指针
    let odd = head, even = head.next, evenHead = even;
    while (even != null && even.next != null) {
        // 保存奇数偶数链表
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    // 通过偶数链表开头指针合并给奇数链表
    odd.next = evenHead;
    return head;
};