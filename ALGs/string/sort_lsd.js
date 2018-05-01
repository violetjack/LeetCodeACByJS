function sort(arr, w) {
    let N = arr.length
    let R = 256
    let aux = new Array(N)
    for (let d = w - 1; d >= 0; d--) {
        let count = []
        // 创建一个长度为 R 的数组保存字符数量
        for (let i = 0; i < R + 1; i++) {
            count.push(0)
        }
        // 统计字符数量
        for (let i = 0; i < N; i++) {
            let char = arr[i].charAt(d)
            let charCode = parseInt(char) + 1 // charCode 是字符原值加一
            count[charCode]++
        }
        // 将前面的字符数量加到后面
        for (let r = 0; r < R; r++) {
            count[r + 1] += count[r]
        }
        // aux 数组变为当前 d 的有序数组
        for (let i = 0; i < N; i++) {
            let char = arr[i].charAt(d)
            let index = count[char]++ // index 的值为 count[char]，之后 count[char]++
            // index 就是 char 的起始索引位置
            aux[index] = arr[i]
        }
        // 回写
        for (let i = 0; i < N; i++) {
            arr[i] = aux[i]
        }
    }
    console.log(arr)
}

const arr = [
    "4PGC938",
    "2YIE230",
    "3CI0720",
    "1ICK750",
    "10HV845",
    "4JZY524",
    "1ICK736",
    "3CI0721",
    "7ATW723",
    "2RLA649"
]

sort(arr, 7)

/*
比如 arr = [ 8,0,0,0,5,4,6,1,3,9 ]
首先创建一个从 0 - 9 都为 0 的 count = [ 0,0,0,0,0,0,0,0,0,0,0 ]
然后统计数量 count = [ 0,3,1,0,1,1,1,1,0,1,1 ]
然后进行累加 count = [ 0,3,4,4,5,6,7,8,8,9,10 ]
最后利用 count 为索引赋值
i = 0, char = 8, index = 8, count = [ 0,3,4,4,5,6,7,8,9,9,10 ], aux[8] = arr[0]
i = 1, char = 0, index = 0, count = [ 1,3,4,4,5,6,7,8,9,9,10 ], aux[0] = arr[1]
i = 2, char = 0, index = 1, count = [ 2,3,4,4,5,6,7,8,9,9,10 ], aux[1] = arr[2]
i = 3, char = 0, index = 2, count = [ 3,3,4,4,5,6,7,8,9,9,10 ], aux[2] = arr[3]
i = 4, char = 5, index = 6, count = [ 3,3,4,4,5,7,7,8,9,9,10 ], aux[6] = arr[4]
i = 5, char = 4, index = 5, count = [ 3,3,4,4,6,7,7,8,9,9,10 ], aux[5] = arr[5]
i = 6, char = 6, index = 7, count = [ 3,3,4,4,6,7,8,8,9,9,10 ], aux[7] = arr[6]
i = 7, char = 1, index = 3, count = [ 3,4,4,4,6,7,8,8,9,9,10 ], aux[3] = arr[7]
i = 8, char = 3, index = 4, count = [ 3,4,4,5,6,7,8,8,9,9,10 ], aux[4] = arr[8]
i = 9, char = 9, index = 9, count = [ 3,4,4,4,6,7,8,8,9,10,10 ], aux[9] = arr[9]

至此我可猜测，传入 count 数组的值加一的原因在于之后的累加 index。
问题：为何数量能够变为索引值？
count 其实是用于计算每个键在排序结果中的起始索引位置。
如 count = [ 0,3,4,4,5,6,7,8,8,9,10 ]。那么值 0 的起始位置为 0，值 4 的起始位置为 5 （说明前面有 5 个小于 5 的值）
所以，count 是索引值，我们通过传入 char 来获取相对 count 的值。然后 count 加一（起始位置后移一位）。

最后将 aux 回写给 arr。

低位优先排序适合长度相同的字符串的排序
 */