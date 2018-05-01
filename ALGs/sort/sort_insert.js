const arr = []
const str = "SORTEXAMPLE"

for (let char of str) {
    arr.push(char)
}

function sort(arr) {
    const len = arr.length
    for (let i = 1; i < len; i++) {
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            swap(arr, j, j - 1)
            console.log(arr)
        }
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
["O", "S", "R", "T", "E", "X", "A", "M", "P", "L", "E"]
["O", "R", "S", "T", "E", "X", "A", "M", "P", "L", "E"]
["O", "R", "S", "E", "T", "X", "A", "M", "P", "L", "E"]
["O", "R", "E", "S", "T", "X", "A", "M", "P", "L", "E"]
["O", "E", "R", "S", "T", "X", "A", "M", "P", "L", "E"]
["E", "O", "R", "S", "T", "X", "A", "M", "P", "L", "E"]
["E", "O", "R", "S", "T", "A", "X", "M", "P", "L", "E"]
["E", "O", "R", "S", "A", "T", "X", "M", "P", "L", "E"]
["E", "O", "R", "A", "S", "T", "X", "M", "P", "L", "E"]
["E", "O", "A", "R", "S", "T", "X", "M", "P", "L", "E"]
["E", "A", "O", "R", "S", "T", "X", "M", "P", "L", "E"]
["A", "E", "O", "R", "S", "T", "X", "M", "P", "L", "E"]
["A", "E", "O", "R", "S", "T", "M", "X", "P", "L", "E"]
["A", "E", "O", "R", "S", "M", "T", "X", "P", "L", "E"]
["A", "E", "O", "R", "M", "S", "T", "X", "P", "L", "E"]
["A", "E", "O", "M", "R", "S", "T", "X", "P", "L", "E"]
["A", "E", "M", "O", "R", "S", "T", "X", "P", "L", "E"]
["A", "E", "M", "O", "R", "S", "T", "P", "X", "L", "E"]
["A", "E", "M", "O", "R", "S", "P", "T", "X", "L", "E"]
["A", "E", "M", "O", "R", "P", "S", "T", "X", "L", "E"]
["A", "E", "M", "O", "P", "R", "S", "T", "X", "L", "E"]
["A", "E", "M", "O", "P", "R", "S", "T", "L", "X", "E"]
["A", "E", "M", "O", "P", "R", "S", "L", "T", "X", "E"]
["A", "E", "M", "O", "P", "R", "L", "S", "T", "X", "E"]
["A", "E", "M", "O", "P", "L", "R", "S", "T", "X", "E"]
["A", "E", "M", "O", "L", "P", "R", "S", "T", "X", "E"]
["A", "E", "M", "L", "O", "P", "R", "S", "T", "X", "E"]
["A", "E", "L", "M", "O", "P", "R", "S", "T", "X", "E"]
["A", "E", "L", "M", "O", "P", "R", "S", "T", "E", "X"]
["A", "E", "L", "M", "O", "P", "R", "S", "E", "T", "X"]
["A", "E", "L", "M", "O", "P", "R", "E", "S", "T", "X"]
["A", "E", "L", "M", "O", "P", "E", "R", "S", "T", "X"]
["A", "E", "L", "M", "O", "E", "P", "R", "S", "T", "X"]
["A", "E", "L", "M", "E", "O", "P", "R", "S", "T", "X"]
["A", "E", "L", "E", "M", "O", "P", "R", "S", "T", "X"]
["A", "E", "E", "L", "M", "O", "P", "R", "S", "T", "X"]
*/