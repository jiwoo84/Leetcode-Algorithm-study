//2022.09.23.

// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
/* Example
    nums                    output
    [1,2,3,1]               true
    [1,2,3,4]               false
    [1,1,1,3,3,4,3,2,4,2]   true
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const distinct = new Set(nums);
  return nums.length !== distinct.size;
};
