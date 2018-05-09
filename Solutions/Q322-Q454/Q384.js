/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums.slice()
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let clone = this.nums.slice()

    for (let i = clone.length - 1; i > 0; i--){
        swap(clone, i, randRange(0, i - 1))
    }
    return clone
};

function swap(nums, i, j) {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

function randRange(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range);
    return num;
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

 var s = new Solution([1,2,3,4,5,6,7,8])
console.log(s.shuffle()) 
console.log(s.reset()) 
console.log(s.shuffle()) 
console.log(s.reset()) 
console.log(s.shuffle()) 
console.log(s.reset()) 
console.log(s.shuffle()) 
console.log(s.reset()) 