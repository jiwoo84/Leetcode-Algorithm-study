/**
 * @param {number[]} nums
 * @return {number}
 * 53. Maximum Subarray
 * 최대 구간 합을 구하는 문제
 * 
 * ex1)
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * ex2)
 * Input: nums = [1]
 * Output: 1
 */

 var maxSubArray = function(nums) {
    let maxArr= [];
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        if(max + nums[i] <= nums[i]) max = nums[i];
        else max += nums[i]; 
        maxArr.push(max);
    }
    return Math.max(...maxArr);
};

// maxArr를 만들지 않고 푸는 방법은 없을지...
// 6 + -5 여기를 하지 않게 하고 끝나는 방법은 없는지
