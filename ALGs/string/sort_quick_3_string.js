function charAt(s, c) {
    if (c < s.length) return parseInt(s.charCodeAt(c))
    else return -1
}

function sort(a, lo, hi, d) {
    if (hi <= lo) return
    let lt = lo,
        gt = hi
    let v = charAt(a[lo], d)
    let i = lo + 1
    while (i <= gt) {
        let t = charAt(a[i], d)
        if (t < v) swap(a, lt++, i++)
        else if (t > v) swap(a, i, gt--)
        else i++
    }
    sort(a, lo, lt - 1, d)
    if (v >= 0) sort(a, lt, gt, d + 1)
    sort(a, gt + 1, hi, d)
}

// 交换
function swap(arr, a, b) {
    let x = arr[a]
    arr[a] = arr[b]
    arr[b] = x
}

const arr = [
    "comadobe",
    "eduprincetoncs",
    "eduprincetoncs",
    "comcnn",
    "eduuvacs",
    "comcnn",
    "eduuvacs",
    "eduuvacs",
    "eduprincetoncs",
    "comapple",
    "comadobe",
    "eduprincetoncs",
    "eduuvacs",
    "comcnn",
    "comcnn",
    "comapple"
]

sort(arr, 0, arr.length - 1, 0)
console.log(arr)

/*
输出结果：
[
    "comadobe", 
    "comadobe", 
    "comapple", 
    "comapple", 
    "comcnn", 
    "comcnn", 
    "comcnn", 
    "comcnn", 
    "eduprincetoncs", 
    "eduprincetoncs", 
    "eduprincetoncs", 
    "eduprincetoncs", 
    "eduuvacs", 
    "eduuvacs", 
    "eduuvacs", 
    "eduuvacs"
]
 */