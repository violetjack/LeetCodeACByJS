const arr = []
const str = "SORTEXAMPLE"

for (let char of str) {
    arr.push(char)
}

function sort(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        let min = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) min = j
        }
        swap(arr, i, min)
        console.log(arr)
    }
    return arr
}

function swap(arr, a, b) {
    let x = arr[a]
    arr[a] = arr[b]
    arr[b] = x
}

sort(arr)

/*
["A", "O", "R", "T", "E", "X", "S", "M", "P", "L", "E"]
["A", "E", "R", "T", "O", "X", "S", "M", "P", "L", "E"]
["A", "E", "E", "T", "O", "X", "S", "M", "P", "L", "R"]
["A", "E", "E", "L", "O", "X", "S", "M", "P", "T", "R"]
["A", "E", "E", "L", "M", "X", "S", "O", "P", "T", "R"]
["A", "E", "E", "L", "M", "O", "S", "X", "P", "T", "R"]
["A", "E", "E", "L", "M", "O", "P", "X", "S", "T", "R"]
["A", "E", "E", "L", "M", "O", "P", "R", "S", "T", "X"]
["A", "E", "E", "L", "M", "O", "P", "R", "S", "T", "X"]
["A", "E", "E", "L", "M", "O", "P", "R", "S", "T", "X"]
["A", "E", "E", "L", "M", "O", "P", "R", "S", "T", "X"]
*/