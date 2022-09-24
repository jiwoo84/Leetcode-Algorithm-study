//2022.09.23.

// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
/* Example
    nums            output
    [1,2,3,4]       [24,12,8,6]
    [-1,1,0,-3,3]   [0,0,9,0,0]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/* Time Limit Exceeded
var productExceptSelf = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++)
    answer.push(
      nums.reduce((acc, val, idx) => (idx !== i ? acc * val : acc), 1)
    );
  return answer;
};*/
var productExceptSelf = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) if (j != i) product *= nums[j];
    answer.push(product);
  }
  return answer;
};
