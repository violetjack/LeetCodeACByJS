const pq = []
let N = 0

function less(i, j) {
    return pq[i] < pq[j]
}

function swap(i, j) {
    let tmp = pq[i]
    pq[i] = pq[j]
    pq[j] = tmp
}

// 上浮
function swim(k) {
    while (k > 1 && less(parseInt(k / 2), k)) {
        swap(parseInt(k / 2), k)
        k = parseInt(k / 2)
    }
}

// 下沉
function sink(k) {
    while (2 * k <= N) {
        let j = 2 * k
        if (j < N & less(j, j + 1)) j++
        if (!less(k, j)) break
        swap(k, j)
        k = j
    }
}

function insert(v) {
    pq[++N] = v
    swim(N)
    console.log(pq)
}

function deleteMax() {
    let max = pq[1]
    swap(1, N--)
    pq[N + 1] = null
    sink(1)
    console.log(pq)
    return max
}

insert("P")
insert("Q")
insert("E")
deleteMax()
insert("X")
insert("A")
insert("M")
deleteMax()
insert("P")
insert("L")
insert("E")
deleteMax()

/**
 * 堆排序
 * 将数组变为二叉字符树
 * 通过操作字符数的上浮和下沉来完成两个功能
 *  1. 删除并返回最大值
 *  2. 插入并求出最大值
 */
/*
[empty, "P"]
[empty, "Q", "P"]
[empty, "Q", "P", "E"]
[empty, "P", "E", null]
[empty, "X", "E", "P"]
[empty, "X", "E", "P", "A"]
[empty, "X", "M", "P", "A", "E"]
[empty, "P", "M", "E", "A", null]
[empty, "P", "P", "E", "A", "M"]
[empty, "P", "P", "L", "A", "M", "E"]
[empty, "P", "P", "L", "A", "M", "E", "E"]
[empty, "P", "M", "L", "A", "E", "E", null] 
 */