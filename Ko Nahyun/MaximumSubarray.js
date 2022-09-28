/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    
    let max = nums[0];
    let currSum = 0;
    
    for(let i = 0 ; i < nums.length ; i++){
        currSum += nums[i];
        
        if(currSum > max){
            max = currSum;
        }
        if(currSum < 0){
            currSum = 0;
        }
    }
    return max;
};
    