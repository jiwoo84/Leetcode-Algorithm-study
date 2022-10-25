/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(nums) {
    let start = 0;
    let end = nums.length-1;
    let mid = 0;

    while(start <= end) {
        
        mid = ~~((start + end) / 2);

        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else if (nums[mid] < nums[end]) {
            end = mid;
        } else {
            return nums[mid];
        }
    }
};
