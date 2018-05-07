function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    return partion(lists, 0, list.length - 1)

};

function partion(lists, s, e) {
    // 开始 == 结束，说明合并完成。
    if (s == e) return lists[s];
    if (s < e) {
        // 分一半计算
        let q = parseInt((s + e) / 2)
        // 前半部分
        let l1 = partion(lists, s, q);
        // 后半部分
        let l2 = partion(lists, q + 1, e);
        // 合并两个链表
        return merge(l1, l2);
    } else
        return null;
}

function mergeTwoLists(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    // 排序插入
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}