function sort(arr) {
    let N = arr.length
    let R = arr.length + 1
    let aux = new Array(N)
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    // 统计各个索引出现的总数
    for (let i = 0; i < N; i++) {
        count[arr[i].key + 1]++
    }
    // 将出现频率转为索引
    for (let r = 0; r < R; r++) {
        count[r + 1] += count[r]
    }
    // 将元素分类
    for (let i = 0; i < N; i++) {
        let index = count[arr[i].key]++
        aux[index] = arr[i]
    }
    // 回写
    for (let i = 0; i < N; i++) {
        arr[i] = aux[i]
    }
}

const arr = [{
        key: 2,
        value: "jack"
    },
    {
        key: 1,
        value: "rose"
    },
    {
        key: 4,
        value: "jack"
    },
    {
        key: 3,
        value: "jack"
    },
    {
        key: 3,
        value: "jack"
    },
    {
        key: 1,
        value: "jack"
    },
    {
        key: 2,
        value: "jack"
    },
    {
        key: 4,
        value: "jack"
    },
    {
        key: 1,
        value: "jack"
    },
]

sort(arr)