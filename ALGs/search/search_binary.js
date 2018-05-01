function binarySearch(arr, val, lo, hi) {
    if (hi < lo) return null
    let mid = lo + parseInt((hi - lo) / 2)
    console.log("范围", lo + "-" + hi)
    console.log("中间值", mid + ":" + arr[mid])
    if (val < arr[mid]) {
        return binarySearch(arr, val, lo, mid - 1)
    } else if (val > arr[mid]) {
        return binarySearch(arr, val, mid + 1, hi)
    } else {
        return mid
    }
}

const arr = [1, 3, 4, 5, 6, 7, 8, 9, 11, 13, 13, 13, 15, 16, 18, 20, 23, 24, 26, 27, 29, 30]

const index = binarySearch(arr, 8, 0, arr.length - 1)

function put(arr, val){
    const i = binarySearch(arr, val, 0, arr.length - 1)
    arr.splice(i, 0, val)
}

/*
范围 0-21
中间值 10:13
范围 0-9
中间值 4:6
范围 5-9
中间值 7:9
范围 5-6
中间值 5:7
*/