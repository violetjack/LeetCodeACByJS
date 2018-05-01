/**
 * 高位优先排序
 * 使用递归方法来解决此问题
 */
const arr = ["she", "shells", "seashells", "by", "the", "seashore", "sells", "are", "surely", "seashells", "jack"]
const R = 256
const M = 15
const aux = new Array(N)
const N = arr.length

function charAt(s, c) {
    if (c < s.length) return parseInt(s.charAt(c))
    else return -1
}
// MSD
function sort(a, lo, hi, d) {
    if (hi <= lo) {
        insertSort(a, lo, hi, d)
        return
    }
    let count = []
    for (let i = 0; i < R + 2; i++) {
        count++
    }
    for (let i = lo; i <= hi; i++) {
        count[charAt(a[i], d) + 2]++
    }
    for (let r = 0; r < R + 1; r++) {
        count[r + 1] += count[r]
    }
    for (let i = lo; i <= hi; i++) {
        aux[count[charAt(a[i], d) + 1]++] = a[i]
    }
    for (let i = lo; i <= hi; i++) {
        a[i] = aux[i - lo]
    }
    for (r = 0; r < R; r++) {
        sort(a, lo + count[r], lo + count[r + 1] - 1, d + 1)
    }
}
// 插入排序
function insertSort(a, lo, hi, d) {
    const len = a.length
    for (let i = lo; i <= hi; i++) {
        for (let j = i; j >= lo && charAt(a[j], d) < charAt(a[j - 1], d); j--) {
            swap(a, j, j - 1)
        }
    }
}
// 交换
function swap(arr, a, b) {
    let x = arr[a]
    arr[a] = arr[b]
    arr[b] = x
}

/**
 * 使用了递归和索引计数法。
 * 递归：先对第一个字符排序，然后递归对有同一个第一个字符串的数组进行排序。其中短的字符串会返回 -1，所以必定排在最前面。
 * 使用索引计数法来针对字符排序。
 * 见 P464 的图 5.1.12
 * 
 * 最坏情况，所有的键都相同，那么 MSD 需要检查所有的字符
 */