/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result = nums[0];
    let max = nums[0];
    let min = nums[0];
    for(let i = 1; i < nums.length; i++){
        const curmax = Math.max(max * nums[i], nums[i], min * nums[i]);
        const curmin = Math.min(max * nums[i], nums[i], min * nums[i])  
        max = curmax;
        min = curmin;
        result = Math.max(max, result);
    }
    
    return result;
};
console.log(maxProduct([2, 0, -3,-2, -2, 4]));

// Maximum Subaray처럼 접근했다가 틀림 
// ->음수 * 음수가 더 클 경우가 있으니 min도 만들어야한다. 
