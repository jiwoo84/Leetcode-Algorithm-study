/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let mid = 0;

    if (nums[start] < nums[end]) return nums[start];

    while (start <= end) {
        
        mid = ~~((start + end) / 2);

        if (start === end) return nums[mid];

        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else if (nums[mid] < nums[end]) {
            end = mid;
        } else {
            end = end - 1;
        }
    }
    return nums[mid];
};
