/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (headA == null || headB == null) return null

    let ALen = getLength(headA),
        BLen = getLength(headB),
        lenDiff = Math.abs(ALen - BLen)

    for (let i = 0; i < lenDiff; i++) {
        if (ALen > BLen) headA = headA.next
        else headB = headB.next
    }
    let curLen = Math.min(ALen, BLen)
    for (let i = 0; i < curLen; i++) {
        if (headA == headB) {
            return headA
        }
        headA = headA.next
        headB = headB.next
    }
    return null
};

function getLength(head) {
    let len = 0
    while (head) {
        len++
        head = head.next
    }
    return len
}
