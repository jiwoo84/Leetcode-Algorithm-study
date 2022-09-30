/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 자기 자신을 뺀... 
 * 
 * ex1) 
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * ex2)
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

 var productExceptSelf = function(nums) {
    let answer = [];
    let left = Array.from({length: nums.length + 1}, () => 1); 
    let right = Array.from({length: nums.length + 1}, () => 1); 
    for(let i = 0; i < nums.length; i++){
        left[i + 1] = left[i] * nums[i];
    }
    right[nums.length-1] = nums[nums.length-1];
    for(let i= nums.length - 2; i >= 0;i--){
        right[i] = right[i+1] * nums[i];
    }

    for(let i = 0; i < nums.length; i++){
        answer.push(left[i]*right[i+1]);
    }

    return answer;
};
