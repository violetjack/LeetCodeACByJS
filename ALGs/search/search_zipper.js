function hash(key){
    return key.charCodeAt() % 4
}

function get(arr, key){
    return arr[hash(key)][key]
}

function put(arr, key, val){
    let hashCode = hash(key)
    if (!arr[hashCode]){
        arr[hashCode] = {}
    }
    arr[hashCode][key] = val
}

let arr = {}

put(arr, "A", "jack")
put(arr, "B", "rose")
put(arr, "C", "wade")
put(arr, "D", "green")
put(arr, "E", "cook")
put(arr, "F", "curry")
put(arr, "G", "james")
console.log(arr)
console.log(get(arr, "C"))

/**
 * 不知道这算不算是拉链法，通过求余将大量数据通过拉链法存储。
 * 获取的时候直接通过索引即可找到。而且还节省了存储空间。
 * 可以通过控制 arr 的长度来节省空间，也可以增加 arr 的长度来加快检索速度。
 */