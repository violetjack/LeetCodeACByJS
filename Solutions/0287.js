/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let set = new Set()
    for (let num of nums){
        if (set.has(num)) return num
        set.add(num)
    }
    return -1
};

/**
 * 2020.05.26
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const sns = nums.sort((a, b) => a - b)
    const set = new Set()
    for (let i = 0; i < sns.length; i++) {
        if (set.has(sns[i])){
            return sns[i]
        } else {
            set.add(sns[i])
        }
    }
};

/**
 * 其实不需要排序
 */

/**
 * 参考答案
 * 利用链表的思路，L = nums[L]; R = nums[nums[R]]
 * 利用链表快慢思想
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    //数组索引值范围0到n, 元素数值范围1到n 小于索引范围, 故可以用数组元素的值当作链表指针
    let L = R = 0, begin
   
    console.log('step1', L, R, begin)
    while (true) {
        L = nums[L]
        R = nums[nums[R]]
        console.log('step2', L, R, begin)
        if (L === R) {
            begin = 0
            console.log('step3', L, R, begin)
            while (begin !== L) {
                begin = nums[begin]
                L = nums[L]
                console.log('step4', L, R, begin)
            }
            console.log('step5', L, R, begin)
            return begin
        }
    }
};

console.log(findDuplicate([1,3,4,2,2])) // 2
console.log(findDuplicate([3,1,3,4,2])) // 3