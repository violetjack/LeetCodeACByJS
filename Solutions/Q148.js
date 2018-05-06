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
var sortList = function (head) {
    if (head == null || head.next == null) return head

    let prev = null, slow = head, fast = head
    while (fast != null && fase.next != null) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }

    prev.next = null;

    let l1 = sortList(head)
    let l2 = sortList(slow)

    return merge(l1, l2)
};

function merge(l1, l2) {
    let l = new ListNode(0), p = l;

    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }

    if (l1 != null)
        p.next = l1;

    if (l2 != null)
        p.next = l2;

    return l.next;
}