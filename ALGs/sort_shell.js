const arr = []
const str = "SORTEXAMPLE"

for (let char of str) {
    arr.push(char)
}

function sort(arr) {
    const len = arr.length
    let h = 1
    while (h < parseInt(len / 3)) {
        h = 3 * h + 1
    }
    while (h >= 1) {
        for (let i = h; i < len; i++) {
            for (let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
                swap(arr, j, j - h)
                console.log(arr)
            }
        }
        h = parseInt(h / 3)
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
h = 4
["E", "O", "R", "T", "S", "X", "A", "M", "P", "L", "E"]
["E", "O", "A", "T", "S", "X", "R", "M", "P", "L", "E"]
["E", "O", "A", "M", "S", "X", "R", "T", "P", "L", "E"]
["E", "O", "A", "M", "P", "X", "R", "T", "S", "L", "E"]
["E", "O", "A", "M", "P", "L", "R", "T", "S", "X", "E"]
["E", "L", "A", "M", "P", "O", "R", "T", "S", "X", "E"]
["E", "L", "A", "M", "P", "O", "E", "T", "S", "X", "R"]
["E", "O", "R", "T", "S", "X", "A", "M", "P", "L", "E"]
["E", "O", "A", "T", "S", "X", "R", "M", "P", "L", "E"]
["E", "O", "A", "M", "S", "X", "R", "T", "P", "L", "E"]
["E", "O", "A", "M", "P", "X", "R", "T", "S", "L", "E"]
["E", "O", "A", "M", "P", "L", "R", "T", "S", "X", "E"]
["E", "L", "A", "M", "P", "O", "R", "T", "S", "X", "E"]
h = 1
["E", "L", "A", "M", "P", "O", "E", "T", "S", "X", "R"]
["E", "A", "L", "M", "P", "O", "E", "T", "S", "X", "R"]
["A", "E", "L", "M", "P", "O", "E", "T", "S", "X", "R"]
["A", "E", "L", "M", "O", "P", "E", "T", "S", "X", "R"]
["A", "E", "L", "M", "O", "E", "P", "T", "S", "X", "R"]
["A", "E", "L", "M", "E", "O", "P", "T", "S", "X", "R"]
["A", "E", "L", "E", "M", "O", "P", "T", "S", "X", "R"]
["A", "E", "E", "L", "M", "O", "P", "T", "S", "X", "R"]
["A", "E", "E", "L", "M", "O", "P", "S", "T", "X", "R"]
["A", "E", "E", "L", "M", "O", "P", "S", "T", "R", "X"]
["A", "E", "E", "L", "M", "O", "P", "S", "R", "T", "X"]
["A", "E", "E", "L", "M", "O", "P", "R", "S", "T", "X"]
*/