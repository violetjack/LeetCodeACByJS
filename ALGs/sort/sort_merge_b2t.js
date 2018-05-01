const arr = []
const str = "SORTEXAMPLE"

for (let char of str) {
    arr.push(char)
}

let aux = new Array(arr.length)
function sort(arr) {
    const len = arr.length
    aux = new Array(len)
    for (let sz = 1; sz < len; sz = sz + sz) {
        for (let lo = 0; lo < len - sz; lo += sz + sz) {
            merge(arr, lo, lo + sz - 1, Math.min((len - 1, lo + sz + sz - 1)))
        }
    }
}

function merge(arr, lo, mid, hi) {
    let i = lo, j = mid + 1
    for (let k = lo; k <= hi; k++) {
        aux[k] = arr[k]
    }
    for (let k = lo; k <= hi; k++) {
        if (i > mid) arr[k] = aux[j++]
        else if (j > hi) arr[k] = aux[i++]
        else if (aux[j] < aux[i]) arr[k] = aux[j++]
        else arr[k] = aux[i++]
    }
    console.log(arr)
}


sort(arr, 0, arr.length - 1)

/*
这是一种先两两对比，然后44对比，如此往复。
最后对比整个数组。
["S", "O", "R", "T", "E", "X", "A", "M", "P", "L", "E"]
["O", "S", "R", "T", "E", "X", "A", "M", "P", "L", "E"]
["O", "S", "R", "T", "E", "X", "A", "M", "P", "L", "E"]
["O", "S", "R", "T", "E", "X", "A", "M", "P", "L", "E"]
["O", "S", "R", "T", "E", "X", "A", "M", "P", "L", "E"]
["O", "S", "R", "T", "E", "X", "A", "M", "L", "P", "E"]
["O", "R", "S", "T", "E", "X", "A", "M", "L", "P", "E"]
["O", "R", "S", "T", "A", "E", "M", "X", "L", "P", "E"]
["O", "R", "S", "T", "A", "E", "M", "X", "E", "L", "P", undefined]
["A", "E", "M", "O", "R", "S", "T", "X", "E", "L", "P", undefined]
["A", "E", "E", "L", "M", "O", "P", "R", "S", "T", "X", undefined, undefined, undefined, undefined, undefined]
*/