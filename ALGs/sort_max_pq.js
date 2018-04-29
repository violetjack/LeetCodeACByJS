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

function swim(k) {
    while (k > 1 && less(k / 2, k)) {
        swap(k / 2, k)
        k = k / 2
    }
}

function sink(k) {
    while (2 * k <= N) {
        let j = 2 * k
        if (j < N & less(j, j + 1)) j++
        if (less(k, j)) break
        swap(k, j)
        k = j
    }
}