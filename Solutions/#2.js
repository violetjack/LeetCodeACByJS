function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = new ListNode(0)
    let cur = head
    let curry = 0
    while (l1 != null && l2 != null) {
        cur.val = (l1.val + l2.val + curry) % 10
        curry = parseInt((l1.val + l2.val + curry) / 10)
        cur.next = new ListNode(0)
        cur = cur.next
        l1 = l1.next
        l2 = l2.next
    }
    if (curry != 0) {
        cur.val = curry
    }
    return head
};

var l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

var l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

