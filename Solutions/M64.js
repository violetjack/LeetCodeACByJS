/**
 * 面试题64
 * 
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
     n && (n += sumNums(n - 1))
     return n
};

console.log(sumNums(7))
console.log(sumNums(2))
console.log(sumNums(1))
console.log(sumNums(0))