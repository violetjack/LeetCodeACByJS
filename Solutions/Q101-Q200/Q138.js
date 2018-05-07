/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    let iter = head,
    next

    while(iter != null){
        next = iter.next

        let copy = new RandomListNode(iter.label)
        iter.next = copy
        copy.next = next
        iter = next
    }

    iter = head
    while(iter != null){
        if (iter.random != null){
            iter.next.random = iter.random.next
        }
        iter = iter.next.next
    }

    iter = head
    let pseudoHead = new RandomListNode(0)
    let copy, copyIter = pseudoHead

    while(iter != null){
        next = iter.next.next

        copy = iter.next
        copyIter.next = copy
        copyIter = copy

        iter.next = next
        iter = next
    }
    return pseudoHead.next;
};
