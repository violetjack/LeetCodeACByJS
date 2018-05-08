/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head, slow = head
    while(fast != null){
        slow = slow.next
        fast = fast.next.next
    }
    slow = reverseList(slow)
    while(slow != null){
        if (slow.val != head.val) return false
        slow = slow.next
        head = head.next
    }
    return true
};


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