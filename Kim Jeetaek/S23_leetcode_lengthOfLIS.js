//2022.10.02.

// 300. Longest Increasing Subsequence
// Given an integer array nums, return the length of the longest strictly increasing subsequence.
// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.
/* Example
    nums                    output
    [10,9,2,5,3,7,101,18]   4
    [0,1,0,3,2,3]           4
    [7,7,7,7,7,7,7]         1
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++)
    if (arr.length === 0 || arr[arr.length - 1] < nums[i]) arr.push(nums[i]);
    else arr[binarySearch(arr, nums[i])] = nums[i];
  return arr.length;
};
function binarySearch(arr, num) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === num) return mid;
    else if (arr[mid] > num) right = mid - 1;
    else left = mid + 1;
  }
  return left;
}
