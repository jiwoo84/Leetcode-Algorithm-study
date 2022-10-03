/**
 * @param {number[]} nums [2,7,9,3,1]
 * @return {number} 2 + 9 + 1
 */

var rob = function(nums) {
    const dp = [];
    for(let i = 0 ; i < nums.length ; i++){
        let max = nums[i];
        for(let j = 0 ; j <= i-2 ; j++){
            max = Math.max(max, dp[j] + nums[i]);
        }
        dp[i] = max;
    }
    return Math.max(...dp);
};
