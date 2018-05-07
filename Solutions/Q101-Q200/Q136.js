var singleNumber = function (nums) {
    var a = 0
    for (let val of nums) a ^= val
    return a
};