var wiggleSort = function (nums) {
    let median = findKthLargest(nums.slice(), parseInt((nums.length + 1) / 2));
    let n = nums.length;
    let left = 0, i = 0, right = n - 1;
    while (i <= right) {

        if (nums[newIndex(i,n)] > median) {
            swap(nums, newIndex(left++,n), newIndex(i++,n));
        }
        else if (nums[newIndex(i,n)] < median) {
            swap(nums, newIndex(right--,n), newIndex(i,n));
        }
        else {
            i++;
        }
    }
}

var findKthLargest = function (nums, k) {
    for (let i = 0; i <= k; i++) {
        let max = i
        for (let j = i; j < nums.length; j++) {
            if (nums[j] > nums[max]) max = j
        }
        swap(nums, i, max)
    }
    return nums[k - 1]
};

function newIndex(index, n) {
    return (1 + 2*index) % (n | 1);
}

function swap(nums, a, b){
    let tmp = nums[a]
    nums[a] = nums[b]
    nums[b] = tmp
}

wiggleSort([1,5,1,1,6,4])
