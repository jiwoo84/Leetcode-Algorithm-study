var maxProduct = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let resultMax = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        
        let num = nums[i];
        
        let curMax = Math.max(max*num, num, min*num); // 양수 최대값
        let curMin = Math.min(max*num, num, min*num); // 음수 최소값
        
        [max, min] = [curMax, curMin];
        
        resultMax = Math.max(max, resultMax);
    }
    
    return resultMax;
};

// 104ms / 43.9MB
