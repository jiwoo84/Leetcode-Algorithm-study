//2022.10.03.

// 198. House Robber
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
/* Example
    nums            output
    [1,2,3,1]       4
    [2,7,9,3,1]     12
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let current = 0,
    max = 0;
  for (let num of nums) {
    let temp = Math.max(num + current, max);
    current = max;
    max = temp;
  }
  return max;
};
