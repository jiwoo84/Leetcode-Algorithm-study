//2022.09.26~27.

// 53. Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.
/* Example
    nums                        output
    [-2,1,-3,4,-1,2,1,-5,4]     6
    [1]                         1
    [5,4,-1,7,8]                23
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0],
    pivot = nums[0];
  for (let i = 1; i < nums.length; i++) {
    pivot = Math.max(pivot + nums[i], nums[i]);
    max = Math.max(max, pivot);
  }
  return max;
};
