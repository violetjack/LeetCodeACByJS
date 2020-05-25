/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}  012345
 */
// var findMedianSortedArrays = function (nums1, nums2) {
//     if (nums1.length == 0 || nums2.length == 0) {
//         if ((nums1.length + nums2.length) % 2 == 1) {
//             const index = parseInt((nums1.length + nums2.length) / 2)
//             return nums2.length == 0 ? nums1[index] : nums2[index]
//         } else {
//             let nums = nums2.length == 0 ? nums1 : nums2
//             const index = nums.length / 2
//             return (nums[index - 1] + nums[index]) / 2
//         }
//     }

//     if (nums1.length > nums2.length) {
//         swap(nums1, nums2)
//     }
//     const M = nums1.length, N = nums2.length
//     let min = 0, max = M, half = parseInt((M + N + 1) / 2) // 连个数组合并的中间值
//     while (min <= max) {
//         let i = parseInt((min + max) / 2) // nums1 的索引值
//         let j = half - i // num2 的索引值
//         if (i < max && nums2[j - 1] > nums1[i]) {
//             min++
//         } else if (i > min && nums1[i - 1] > nums2[j]) {
//             max--
//         } else {
//             let maxLeft = 0
//             if (i == 0) {
//                 maxLeft = nums2[j - 1]
//             } else if (j == 0) {
//                 maxLeft = nums1[i - 1]
//             } else {
//                 maxLeft = Math.max(nums1[i - 1], nums2[j - 1])
//             }
//             if ((M + N) % 2 == 1) {
//                 return maxLeft
//             }
//             let minRight = 0
//             if (i == M) {
//                 minRight = nums2[j]
//             } else if (j == N) {
//                 minRight = nums1[i]
//             } else {
//                 minRight = Math.min(nums1[i], nums2[j])
//             }
//             return (maxLeft + minRight) / 2
//         }
//     }
//     return 0
// };

// function swap(a, b) {
//     let tmp = a
//     a = b
//     b = tmp
// }

// const nums1 = [4, 5]
// const nums2 = [1, 2, 3]
// findMedianSortedArrays(nums1, nums2)

// TODO 索引法
var findMedianSortedArrays = function (nums1, nums2) {
    let i1 = 0;
    let i2 = 0;
    const mid = Math.floor((nums1.length + nums2.length) / 2);
    const odd = (nums1.length + nums2.length) % 2 === 1;
    while (i1 + i2 < mid ) {
        console.log(i1, i2);
        console.log(nums1[i1], nums2[i2]);
        console.log('---')
        if (nums1[i1] === undefined) {
            i2++;
            continue;
        }
        if (nums2[i2] === undefined) {
            i1++;
            continue;
        }
        if (nums1[i1] <= nums2[i2]) {
            i1++;
        } else {
            i2++;
        }
    }

    console.log(i1, i2, odd);

    if (odd) {
        return nums1[i1] < nums2[i2] ? nums1[i1] : nums2[i2];
    } else {
        if (nums1[i1] === undefined) {
            return (nums2[i2] + nums2[i2 + 1]) / 2;
        } else if (nums2[i2] === undefined) {
            return (nums1[i1] + nums1[i1 + 1]) / 2;
        } else {
            return (nums1[i1] + nums2[i2]) / 2;
        }
    }
};

const nums1 = [1, 3, 4, 8];
const nums2 = [2, 5, 6, 7];

console.log(findMedianSortedArrays(nums1, nums2));

// TODO 用第 K 小算法来实现