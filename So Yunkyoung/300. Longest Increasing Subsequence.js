/**
 * @param {number[]} nums
 * @return {number}
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4  // [2,3,7,101]
 * Input: nums = [0,1,0,3,2,3]
 * Output: 4    // [0,1,2,3]
 * Input: nums = [7,7,7,7,7,7,7]
 * Output: 1
 * O(n log(n))
 */
var lengthOfLIS = function(nums) {
    if(nums.length == 1) return 1;
    let lis = []; 
    lis.push(nums[0]);
    for(let i = 1; i < nums.length; i++){
        // lis의 마지막 요소보다 크면 그냥 push, 작으면 binary search로 찾아서 요소 바꾸기, 같으면 그냥 다음 i로,,
        if(nums[i] === lis[lis.length - 1]) continue;
        else if(nums[i] > lis[lis.length - 1]){
            lis.push(nums[i]);
        }
        else if(nums[i] < lis[lis.length - 1]){
            let start = 0; 
            let end = lis.length - 1;
            while(start < end){
                let mid = Math.floor((start + end) / 2);
                if(nums[i] <= lis[mid]) end = mid;
                else start = mid + 1;
            }
            lis[start] = nums[i];
        }
    }
    return lis.length;
};
