const arr = []
const str = "SORTEXAMPLE"

for (let char of str) {
    arr.push(char)
}

let aux = new Array(arr.length)
function sort(arr, lo, hi) {
    if (hi <= lo) return
    let mid = lo + (parseInt((hi - lo) / 2))

    sort(arr, lo, mid)
    sort(arr, mid + 1, hi)
    merge(arr, lo, mid, hi)
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
通过归并法缩小范围
["S", "O", "R", "T", "E", "X", "A", "M", "P", "L", "E"]
left
["O", "S", "R", "T", "E", "X", "A", "M", "P", "L", "E"]
["O", "R", "S", "T", "E", "X", "A", "M", "P", "L", "E"]
["O", "R", "S", "E", "T", "X", "A", "M", "P", "L", "E"]
["O", "R", "S", "E", "T", "X", "A", "M", "P", "L", "E"]
["E", "O", "R", "S", "T", "X", "A", "M", "P", "L", "E"]
["E", "O", "R", "S", "T", "X", "A", "M", "P", "L", "E"]
right
["E", "O", "R", "S", "T", "X", "A", "M", "P", "L", "E"]
["E", "O", "R", "S", "T", "X", "A", "M", "P", "E", "L"]
["E", "O", "R", "S", "T", "X", "A", "E", "L", "M", "P"]
all
["A", "E", "E", "L", "M", "O", "P", "R", "S", "T", "X"]
*/