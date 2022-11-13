/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 
 가장 빈도 높은 k 개 원소 추출
 제약조건: timeComplexity - O(n)
*/

var topKFrequent = function(nums, k) {
    const freq = {};

    for(let i = 0 ; i < nums.length ; i++){
        freq[nums[i]] = freq[nums[i]] + 1 || 1;
    }

    const stack = Array(nums.length);
    for(let i = 0 ; i < stack.length ; i++){
        stack[i] = [];
    }

    // index: freqNum, value: num
    for(let num in freq){
        stack[freq[num]-1].push(num);
    }
    
    const res = [];
    let cnt = 0;
    while(cnt < k){
        if(stack[stack.length-1].length === 0) {
            stack.pop();
        }
        else{
            res.push(stack[stack.length-1].pop());
            cnt++;
        }
    }
    return res;
};
