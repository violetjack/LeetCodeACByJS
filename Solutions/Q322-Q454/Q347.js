/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let obj = {}
    for (let num of nums) {
        if (obj[num])
            obj[num].count++
        else
            obj[num] = { num: num, count: 1 }
    }
    let arr = []
    for (let k in obj) {
        arr.push(obj[k])
    }
    arr.sort((a, b) => {
        return b.count - a.count
    })

    return arr.slice(0, k).map(item => {
        return item.num
    })
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))