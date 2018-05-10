/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort(sortFun)
    nums2.sort(sortFun)

    if (nums1.length < nums2.length) {
        let tmp = nums1
        nums1 = nums2
        nums2 = tmp
    }
    const ans = []
    let index1 = 0, index2 = 0
    while (index1 < nums1.length) {
        if (nums1[index1] == nums2[index2]) {
            ans.push(nums2[index2])
            index1++
            index2++
        } else if (nums1[index1] > nums2[index2]) {
            index2++
        } else {
            index1++
        }
    }
    return ans
};

function sortFun(a, b) {
    return a - b
}

intersect([-2147483648, 1, 2, 3], [1, -2147483648, -2147483648])