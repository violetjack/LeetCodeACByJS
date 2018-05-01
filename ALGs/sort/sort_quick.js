const arr = []
const str = "SORTEXAMPLE"

for (let char of str) {
    arr.push(char)
}

function sort(arr, lo, hi) {
    if (hi <= lo + 1) return
    let mid = partition(arr, lo, hi) // 切分方法
    sort(arr, lo, mid)
    sort(arr, mid + 1, hi)
}

function partition(arr, lo, hi) {
    let i = lo, j = hi + 1
    let v = arr[lo]
    while(true) {
        while(arr[++i] < v) if (i == hi) break
        while(v < arr[--j]) if (j == lo) break
        if ((i >= j)) break
        swap(arr, i, j)
        console.log(arr)
    }
    swap(arr, lo, j)
    console.log(arr)
    return j
}

function swap(arr, a, b) {
    let x = arr[a]
    arr[a] = arr[b]
    arr[b] = x
}

sort(arr, 0, arr.length - 1)

/**
 * 先将 lo 变为中间切分点，切分出一块大于和一块小于 arr[lo] 的区域
 * 然后分别切分调换，直到最小点
 */
/*
["S", "O", "R", "T", "E", "X", "A", "M", "P", "L", "E"]
["S", "O", "R", "E", "E", "X", "A", "M", "P", "L", "T"]
["S", "O", "R", "E", "E", "L", "A", "M", "P", "X", "T"]
["P", "O", "R", "E", "E", "L", "A", "M", "S", "X", "T"]
["P", "O", "M", "E", "E", "L", "A", "R", "S", "X", "T"]
["A", "O", "M", "E", "E", "L", "P", "R", "S", "X", "T"]
["A", "O", "M", "E", "E", "L", "P", "R", "S", "X", "T"]
["A", "L", "M", "E", "E", "O", "P", "R", "S", "X", "T"]
["A", "L", "E", "E", "M", "O", "P", "R", "S", "X", "T"]
["A", "E", "E", "L", "M", "O", "P", "R", "S", "X", "T"]
["A", "E", "E", "L", "M", "O", "P", "R", "S", "X", "T"]
 */
/**
 * 切分的对换方法
 * 找到切分点左侧大于切分点的值和右侧小于切分点的值进行调换。
 */