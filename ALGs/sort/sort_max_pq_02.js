// 上浮
// function swim(k) {
//     while (k > 1 && less(parseInt(k / 2), k)) {
//         swap(parseInt(k / 2), k)
//         k = parseInt(k / 2)
//     }
// }

// 下沉
function sink(arr, k, len) {
    while (2 * k <= len) {
        let j = 2 * k
        if (j < len & arr[j] < arr[j + 1]) j++
        if (arr[k] >= arr[j]) break
        swap(arr, k, j)
        k = j
    }
    console.log("sink", arr)
}

function sort(arr){
    let len = arr.length
    console.log("step 01")
    for (let k = parseInt(len/2); k >=0; k--){
        sink(arr, k, len)
    }
    len--
    console.log("step 02")    
    while(len > 0){
        swap(arr, 0, len--)
        sink(arr, 0, len)
    }
    console.log(arr)
}

function swap(arr, a, b) {
    let x = arr[a]
    arr[a] = arr[b]
    arr[b] = x
}

const arr = ["S","O","R","T","E","X","A","M","P","L","E"]
sort(arr)

/**
 * 堆排序
 * 先将数组进行堆有序化
 * 然后求出最大值移动到最后
 * 然后将堆的范围向前缩小一位
 */
/*
step 01
["S", "O", "R", "T", "E", "X", "A", "M", "P", "L", "E"]
["S", "O", "R", "T", "P", "X", "A", "M", "E", "L", "E"]
["S", "O", "R", "T", "P", "X", "A", "M", "E", "L", "E"]
["S", "O", "X", "T", "P", "R", "A", "M", "E", "L", "E"]
["S", "X", "R", "T", "P", "O", "A", "M", "E", "L", "E"]
["X", "T", "R", "S", "P", "O", "A", "M", "E", "L", "E"]
step 02
["T", "S", "R", "M", "P", "O", "A", "E", "E", "L", "X"]
["S", "R", "P", "M", "L", "O", "A", "E", "E", "T", "X"]
["R", "P", "O", "M", "L", "E", "A", "E", "S", "T", "X"]
["P", "O", "L", "M", "E", "E", "A", "R", "S", "T", "X"]
["O", "M", "L", "A", "E", "E", "P", "R", "S", "T", "X"]
["M", "L", "E", "A", "E", "O", "P", "R", "S", "T", "X"]
["L", "E", "E", "A", "M", "O", "P", "R", "S", "T", "X"]
["E", "E", "A", "L", "M", "O", "P", "R", "S", "T", "X"]
["E", "A", "E", "L", "M", "O", "P", "R", "S", "T", "X"]
["A", "E", "E", "L", "M", "O", "P", "R", "S", "T", "X"]
*/