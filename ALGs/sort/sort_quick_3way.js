const arr = []
const str = "SORTEXAMPLE"

for (let char of str) {
    arr.push(char)
}

function sort(arr, lo, hi) {
    if (hi <= lo) return
    let lt = lo, i = lo + 1, gt = hi;
    let v = arr[lo]
    while (i <= gt) {
        if (arr[i] < v) swap(arr, lt++, i++)
        else if (arr[i] > v) swap(arr, i, gt--)
        else i++
        console.log(arr)
    }
    sort(arr, lo, lt - 1)
    sort(arr, gt + 1, hi)
}


function swap(arr, a, b) {
    let x = arr[a]
    arr[a] = arr[b]
    arr[b] = x
}

sort(arr, 0, arr.length - 1)

/**
 * 三向切分的快速排序指的是，将数组分为小于、等于和大于当前切分值的区域。
 * 切分点从开头字母开始
 * 擅长于有大量重复元素的情况
 */
/*
初始化状态
["S", "O", "R", "T", "E", "X", "A", "M", "P", "L", "E"]
O < S swap(arr, lt++, i++)
["O", "S", "R", "T", "E", "X", "A", "M", "P", "L", "E"]
R < S swap(arr, lt++, i++)
["O", "R", "S", "T", "E", "X", "A", "M", "P", "L", "E"]
T > S swap(arr, i, gt--)
["O", "R", "S", "E", "E", "X", "A", "M", "P", "L", "T"]
E < S
["O", "R", "E", "S", "E", "X", "A", "M", "P", "L", "T"]
E < S
["O", "R", "E", "E", "S", "X", "A", "M", "P", "L", "T"]
X > S
["O", "R", "E", "E", "S", "L", "A", "M", "P", "X", "T"]
["O", "R", "E", "E", "L", "S", "A", "M", "P", "X", "T"]
["O", "R", "E", "E", "L", "A", "S", "M", "P", "X", "T"]
["O", "R", "E", "E", "L", "A", "M", "S", "P", "X", "T"]
["O", "R", "E", "E", "L", "A", "M", "P", "S", "X", "T"]
S 切分完毕  ["O", "R", "E", "E", "L", "A", "M", "P",|<-| "S",|->| "X", "T"]
["O", "P", "E", "E", "L", "A", "M", "R", "S", "X", "T"]
["O", "M", "E", "E", "L", "A", "P", "R", "S", "X", "T"]
["M", "O", "E", "E", "L", "A", "P", "R", "S", "X", "T"]
["M", "E", "O", "E", "L", "A", "P", "R", "S", "X", "T"]
["M", "E", "E", "O", "L", "A", "P", "R", "S", "X", "T"]
["M", "E", "E", "L", "O", "A", "P", "R", "S", "X", "T"]
["M", "E", "E", "L", "A", "O", "P", "R", "S", "X", "T"]
["E", "M", "E", "L", "A", "O", "P", "R", "S", "X", "T"]
["E", "E", "M", "L", "A", "O", "P", "R", "S", "X", "T"]
["E", "E", "L", "M", "A", "O", "P", "R", "S", "X", "T"]
["E", "E", "L", "A", "M", "O", "P", "R", "S", "X", "T"]
["E", "E", "L", "A", "M", "O", "P", "R", "S", "X", "T"]
["E", "E", "A", "L", "M", "O", "P", "R", "S", "X", "T"]
["A", "E", "E", "L", "M", "O", "P", "R", "S", "X", "T"]
["A", "E", "E", "L", "M", "O", "P", "R", "S", "X", "T"]
["A", "E", "E", "L", "M", "O", "P", "R", "S", "T", "X"]
 */