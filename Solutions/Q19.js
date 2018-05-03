function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0)
    dummy.next = head
    let first = dummy
    let second = dummy
    for (let i = 1; i <= n + 1; i++){
        first = first.next
    }
    while(first != null){
        first = first.next
        second = second.next
    }
    second.next = second.next.next
    return dummy.next
};

// if (head.next == null) return null
// let fast = head.next, slow = head
// let i = 1
// while (i < n) {
//     if (fast.next) {
//         fast = fast.next
//     }
//     i++
// }
// if (fast.next) {
//     if (fast.next.next) fast.next = fast.next.next
//     else fast.next = null
// }
// return head